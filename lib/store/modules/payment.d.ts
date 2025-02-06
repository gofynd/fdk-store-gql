import type { ThunkActionDispatch } from "redux-thunk";
export declare class PaymentModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    checkoutPayment(payload: any): any;
    getSupportedUpiIntentApps(payload: any): any;
    validateCardDetails(payload: any): any;
}
