import type { ThunkActionDispatch } from "redux-thunk";
import { CustomModule } from "./modules/custom";
import { ThemeModule } from "./modules/theme";
import { PaymentModule } from "./modules/payment";
type ExecuteOptions = {
    skipStoreUpdate?: boolean;
    skipFpiEvent?: boolean;
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
    private serverCookies;
    private start_upload_query;
    private complete_upload_query;
    constructor(initialData: any, authorizationHeader: any, domain: any);
    private executeFetch;
    private getServerCookies;
    private encodeCookie;
    setServerCookies(cookies?: Record<string, string>): void;
    setI18nDetails(cookieValue: any): void;
    observeStore(getter: Function, onChange: Function): void;
    executeGQL(query: string, params: any | null, options?: ExecuteOptions): Promise<any>;
    uploadFile(file: File, NAMESPACE?: string, START_UPLOAD_QUERY?: string, COMPLETE_UPLOAD_QUERY?: string): Promise<any>;
}
export default ApplicationStore;
