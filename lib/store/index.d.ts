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
    private setI18nDetails;
    observeStore(getterKey: string, onChange: Function): import("redux").Unsubscribe;
    executeGQL(query: string, params: any | null, options?: ExecuteOptions): Promise<any>;
}
export default ApplicationStore;
