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
    extractJsonKeys(parsedData: any, depth: number): string[] | null;
}
export default ApplicationStore;
