import type { ThunkActionDispatch } from "redux-thunk";
import { CustomModule } from "./modules/custom";
import { ThemeModule } from "./modules/theme";
import { PaymentModule } from "./modules/payment";
type ExecuteOptions = {
    skipStoreUpdate?: boolean;
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
    constructor(initialData: any, authorizationHeader: any, domain: any);
    private executeFetch;
    observeStore(getterKey: string, onChange: Function): import("redux").Unsubscribe;
    executeGraphQL(query: string, slug: string | null, params?: ExecuteOptions): Promise<any | undefined>;
    executeGQL(query: string, params: any | null, options?: ExecuteOptions): Promise<any>;
    extractJsonKeys(parsedData: any, depth: number): string[] | null;
}
export default ApplicationStore;
