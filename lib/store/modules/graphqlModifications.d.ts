import { DocumentNode } from 'graphql';
export type GQLModifierResult = {
    query?: string;
    requestParam?: Record<string, any>;
    response?: any;
    sellerDetails?: any;
};
type ModifierFn = (req: any) => Promise<GQLModifierResult>;
interface UIModifierRegistry {
    uiFunctions: Record<string, ModifierFn[]>;
    apply(operationName: string, payloadModifier: ModifierFn): void;
    remove(operationName: string, callback?: ModifierFn): void;
    getOperationNamesFromAst(ast: DocumentNode): string[];
    mergeQueries(mainAst: DocumentNode, extraAst: DocumentNode): DocumentNode;
}
export declare const GraphQLModifierUtils: () => UIModifierRegistry;
export {};
