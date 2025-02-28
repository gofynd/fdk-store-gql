import { SerializedError } from "@reduxjs/toolkit";
import { AggregatorsConfigDetail, PaymentOptionDetails } from "../../types/graphql";
declare global {
    interface Window {
        fpi: any;
        PaymentGateways: any;
    }
}
export declare const checkoutPayment: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const paymentReducer: import("redux").Reducer<{
    payment_options: any;
    aggregators_config: any;
}, import("redux").AnyAction>;
export declare const setPaymentModeRoutes: import("@reduxjs/toolkit").ActionCreatorWithPayload<PaymentOptionDetails, "payment/setPaymentModeRoutes">, setaggregatorsConfig: import("@reduxjs/toolkit").ActionCreatorWithPayload<AggregatorsConfigDetail, "payment/setaggregatorsConfig">;
