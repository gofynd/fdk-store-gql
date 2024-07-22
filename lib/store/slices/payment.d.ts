import { SerializedError } from "@reduxjs/toolkit";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { AggregatorsConfigDetail, PaymentOptionDetails } from "../../types/graphql";
export declare const fetchPaymentOptions: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchAggregatorsConfig: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const verifyCustomerForPayment: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const customerCreditSummary: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const redirectToAggregator: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const customerOnboard: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getEpaylaterBannerDetails: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getActiveCardAggregator: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const checkoutPayment: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const confirmPaymentAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const confirmPayment: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: ApolloClient<NormalizedCacheObject>;
    };
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
