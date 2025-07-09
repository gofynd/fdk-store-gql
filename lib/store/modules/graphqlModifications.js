import { Kind, } from 'graphql';
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
            var _a;
            const newDefinitions = [...mainAst.definitions];
            for (const def of extraAst.definitions) {
                if (def.kind === Kind.OPERATION_DEFINITION) {
                    const mainOp = newDefinitions.find((d) => {
                        var _a, _b;
                        return d.kind === Kind.OPERATION_DEFINITION &&
                            ((_a = d.name) === null || _a === void 0 ? void 0 : _a.value) === ((_b = def.name) === null || _b === void 0 ? void 0 : _b.value);
                    });
                    if (mainOp) {
                        const updatedMainOp = Object.assign(Object.assign({}, mainOp), { variableDefinitions: [
                                ...(mainOp.variableDefinitions || []),
                                ...(def.variableDefinitions || []),
                            ], selectionSet: Object.assign(Object.assign({}, mainOp.selectionSet), { selections: [
                                    ...mainOp.selectionSet.selections,
                                    ...(((_a = def.selectionSet) === null || _a === void 0 ? void 0 : _a.selections) || []),
                                ] }) });
                        const index = newDefinitions.indexOf(mainOp);
                        if (index !== -1) {
                            newDefinitions[index] = updatedMainOp;
                        }
                    }
                    else {
                        newDefinitions.push(def);
                    }
                }
            }
            return {
                kind: Kind.DOCUMENT,
                definitions: newDefinitions,
            };
        },
    };
};
//# sourceMappingURL=graphqlModifications.js.map