import { Kind, visit, } from "graphql";
const THEME_VARIABLES = [
    { name: "filters", type: "Boolean" },
    { name: "sectionPreviewHash", type: "String" },
    { name: "company", type: "Int" },
    { name: "previewId", type: "String" },
];
function createGqlVariableDefinitionNode({ name, type, }) {
    const namedType = {
        kind: Kind.NAMED_TYPE,
        name: { kind: Kind.NAME, value: type },
    };
    return {
        kind: Kind.VARIABLE_DEFINITION,
        variable: { kind: Kind.VARIABLE, name: { kind: Kind.NAME, value: name } },
        type: namedType,
        directives: [],
    };
}
function createGqlArgumentNode(name) {
    return {
        kind: Kind.ARGUMENT,
        name: { kind: Kind.NAME, value: name },
        value: { kind: Kind.VARIABLE, name: { kind: Kind.NAME, value: name } },
    };
}
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
        },
        modifyThemeQuery(ast) {
            const variableDefsToAdd = THEME_VARIABLES.map(createGqlVariableDefinitionNode);
            const argumentsNodesToadd = THEME_VARIABLES.map((v) => createGqlArgumentNode(v.name));
            return visit(ast, {
                OperationDefinition(node) {
                    var _a;
                    if (!node.name || node.name.value !== "Theme")
                        return;
                    const existing = (_a = node.variableDefinitions) !== null && _a !== void 0 ? _a : [];
                    const missing = variableDefsToAdd.filter((v) => !existing.some((e) => e.variable.name.value === v.variable.name.value));
                    return missing.length
                        ? Object.assign(Object.assign({}, node), { variableDefinitions: [...existing, ...missing] }) : undefined;
                },
                Field(node) {
                    var _a, _b;
                    if (node.name.value !== "theme_page_detail")
                        return;
                    const existingNames = new Set(((_a = node.arguments) !== null && _a !== void 0 ? _a : []).map((a) => a.name.value));
                    const missing = argumentsNodesToadd.filter((a) => !existingNames.has(a.name.value));
                    return missing.length
                        ? Object.assign(Object.assign({}, node), { arguments: [...((_b = node.arguments) !== null && _b !== void 0 ? _b : []), ...missing] }) : undefined;
                },
            });
        },
    };
};
//# sourceMappingURL=graphqlModifications.js.map