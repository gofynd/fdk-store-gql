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
    /** orderingSource provided via the constructor (initialised by react-starter). */
    private constructorOrderingSource;
    /** orderingSource provided at runtime via setOrderingSource (called by skyfire). */
    private skyfireOrderingSource;
    /**
     * Effective ordering source. The value set via setOrderingSource (skyfire)
     * takes priority; if it is falsy we fall back to the constructor value
     * (react-starter), and if that is also falsy it stays an empty string.
     */
    get orderingSource(): string;
    /** orderingSourceType — 'storefront' when an ordering source is present. */
    get orderingSourceType(): string;
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
