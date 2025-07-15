import { Kind, visit, } from 'graphql';
export const GraphQLModifierUtils = () => {
    const uiFunctions = {};
    return {
        uiFunctions,
        apply(operationName, payloadModifier) {
            if (!uiFunctions[operationName]) {
                uiFunctions[operationName] = [];
            }
            uiFunctions[operationName].push(payloadModifier);
        },
        remove(operationName, callback) {
            if (!callback) {
                delete uiFunctions[operationName];
            }
            else {
                const fns = uiFunctions[operationName];
                if (Array.isArray(fns)) {
                    uiFunctions[operationName] = fns.filter(fn => fn !== callback);
                    if (uiFunctions[operationName].length === 0) {
                        delete uiFunctions[operationName];
                    }
                }
            }
        },
        getOperationNamesFromAst(ast) {
            return ast.definitions
                .filter((def) => def.kind === Kind.OPERATION_DEFINITION)
                .map((def) => { var _a; return (def.kind === Kind.OPERATION_DEFINITION && 'name' in def ? ((_a = def.name) === null || _a === void 0 ? void 0 : _a.value) || '' : ''); })
                .filter((name) => name !== '');
        },
        mergeQueries(mainAst, extraAst) {
            var _a, _b, _c, _d;
            const newDefinitions = [...mainAst.definitions];
            for (const def of extraAst.definitions) {
                if (def.kind !== Kind.OPERATION_DEFINITION)
                    continue;
                const defOp = def;
                const defOpName = (_a = defOp.name) === null || _a === void 0 ? void 0 : _a.value;
                const mainOp = newDefinitions.find((d) => {
                    var _a;
                    return d.kind === Kind.OPERATION_DEFINITION &&
                        ((_a = d.name) === null || _a === void 0 ? void 0 : _a.value) === defOpName;
                });
                if (!mainOp) {
                    const existingNames = newDefinitions
                        .filter((d) => d.kind === Kind.OPERATION_DEFINITION)
                        .map((d) => { var _a; return (_a = d.name) === null || _a === void 0 ? void 0 : _a.value; })
                        .filter(Boolean);
                    if (existingNames.length > 0 && !existingNames.includes(defOpName)) {
                        throw new Error(`Cannot merge operations with different names: found "${defOpName}", existing: "${existingNames.join(', ')}"`);
                    }
                    newDefinitions.push(defOp);
                    continue;
                }
                // Merge variable definitions (latest wins)
                const mergedVarMap = new Map();
                for (const v of mainOp.variableDefinitions || []) {
                    mergedVarMap.set(v.variable.name.value, v);
                }
                for (const v of defOp.variableDefinitions || []) {
                    mergedVarMap.set(v.variable.name.value, v);
                }
                // Merge field selections: last one wins
                const allSelections = [
                    ...(mainOp.selectionSet.selections || []),
                    ...(((_b = defOp.selectionSet) === null || _b === void 0 ? void 0 : _b.selections) || []),
                ];
                const fieldMap = new Map();
                for (const field of allSelections) {
                    if (field.kind === Kind.FIELD && ((_c = field.name) === null || _c === void 0 ? void 0 : _c.value)) {
                        fieldMap.set(field.name.value, field); // keep last
                    }
                }
                const mergedSelections = Array.from(fieldMap.values());
                // Update the operation
                const updatedMainOp = Object.assign(Object.assign({}, mainOp), { variableDefinitions: Array.from(mergedVarMap.values()), selectionSet: Object.assign(Object.assign({}, mainOp.selectionSet), { selections: mergedSelections }) });
                // 🚨 Clean unused variables
                const usedVariables = new Set();
                visit(updatedMainOp.selectionSet, {
                    Variable(node) {
                        usedVariables.add(node.name.value);
                    },
                });
                const cleanedMainOp = Object.assign(Object.assign({}, updatedMainOp), { variableDefinitions: (_d = updatedMainOp.variableDefinitions) === null || _d === void 0 ? void 0 : _d.filter((v) => usedVariables.has(v.variable.name.value)) });
                const index = newDefinitions.indexOf(mainOp);
                newDefinitions[index] = cleanedMainOp;
            }
            return {
                kind: Kind.DOCUMENT,
                definitions: newDefinitions,
            };
        }
    };
};
//# sourceMappingURL=graphqlModifications.js.map