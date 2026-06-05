import type { ThunkActionDispatch } from "redux-thunk";
import { type JuspaySetupConfig } from "../utils/gateways/juspay";
export declare class PaymentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    checkoutPayment(payload: any): any;
    getSupportedUpiIntentApps(payload: any): any;
    validateCardDetails(payload: any): any;
    ensureJuspayScriptLoaded(sdkLink?: string): Promise<void>;
    setupJuspay(config: JuspaySetupConfig, options?: {
        scriptOnly?: boolean;
    }): Promise<any>;
}
