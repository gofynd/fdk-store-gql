import type { ThunkActionDispatch } from "redux-thunk";
import { CustomModule } from "./modules/custom";
import { ThemeModule } from "./modules/theme";
import { PaymentModule } from "./modules/payment";
type ExecuteOptions = {
    skipStoreUpdate?: boolean;
    meta?: any;
};
declare class ApplicationStore {
    private store;
    getters: any;
    dispatch: ThunkActionDispatch<any>;
    custom: CustomModule;
    theme: ThemeModule;
    payment: PaymentModule;
    PaymentGateways: Record<string, any>;
    private domain;
    private authorizationHeader;
    private orderingSource;
    private serverCookies;
    private start_upload_query;
    private complete_upload_query;
    constructor(initialData: any, authorizationHeader: any, domain: any, orderingSource: string);
    private executeFetch;
    private getServerCookies;
    private encodeCookie;
    setServerCookies(cookies?: Record<string, string>): void;
    setI18nDetails(cookieValue: any): void;
    setOrderingSource(orderingSource: string): void;
    observeStore(getter: Function, onChange: Function): void;
    private readonly gqlModifier;
    mutations: {
        apply: (operationName: string, payloadModifier: (req: any) => Promise<import("./modules/graphqlModifications").GQLModifierResult>) => void;
        remove: (operationName: string, callback?: ((req: any) => Promise<import("./modules/graphqlModifications").GQLModifierResult>) | undefined) => void;
    };
    setSliceData: <T = any>(sliceName: string, data: T) => void;
    /**
     * Handle GraphQL response data by calling the appropriate response handler
     * @param responseData - The GraphQL response data
     * @param params - The query/mutation parameters
     * @param query - Query string to infer operation type ('query' or 'mutation')
     * @param options - Optional execution options
     */
    handleGQLResponse: (responseData: any, params: any | null, operationType: 'query' | 'mutation', options?: ExecuteOptions) => void;
    executeGQL(query: string, params: any | null, options?: ExecuteOptions): Promise<any>;
    uploadFile(file: File, NAMESPACE?: string, START_UPLOAD_QUERY?: string, COMPLETE_UPLOAD_QUERY?: string): Promise<any>;
}
export default ApplicationStore;
