import { AddressSlice } from "../../types/address";
export declare const fetchAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: import("@apollo/client").ApolloClient<import("@apollo/client").NormalizedCacheObject>;
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchAddressById: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: import("@apollo/client").ApolloClient<import("@apollo/client").NormalizedCacheObject>;
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: import("@apollo/client").ApolloClient<import("@apollo/client").NormalizedCacheObject>;
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: import("@apollo/client").ApolloClient<import("@apollo/client").NormalizedCacheObject>;
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: import("@apollo/client").ApolloClient<import("@apollo/client").NormalizedCacheObject>;
    };
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addressReducer: import("redux").Reducer<AddressSlice, import("redux").AnyAction>;
