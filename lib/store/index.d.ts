import type { ThunkActionDispatch } from "redux-thunk";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { CustomModule } from "./modules/custom";
import { ThemeModule } from "./modules/theme";
type ExecuteOptions = {
    skipStoreUpdate?: boolean;
};
declare class ApplicationStore {
    private gqClient;
    private store;
    getters: any;
    dispatch: ThunkActionDispatch<any>;
    custom: CustomModule;
    theme: ThemeModule;
    PaymentGateways: Record<string, any>;
    constructor(initialData: any, gqClient: ApolloClient<NormalizedCacheObject>);
    observeStore(getterKey: string, onChange: Function): import("redux").Unsubscribe;
    executeGraphQL(query: string, slug: string | null, params?: ExecuteOptions): Promise<any | undefined>;
    executeGQL(query: string, params: any | null, options?: ExecuteOptions): Promise<import("@apollo/client").SingleExecutionResult<any, Record<string, any>, Record<string, any>> | import("@apollo/client").ExecutionPatchInitialResult<any, Record<string, any>> | import("@apollo/client").ExecutionPatchIncrementalResult<any, Record<string, any>> | {
        data: null;
        errors: {
            code: string;
            message: any;
        }[];
    }>;
    extractJsonKeys(parsedData: any, depth: number): string[] | null;
}
export default ApplicationStore;
