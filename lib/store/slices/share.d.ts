import { SerializedError } from '@reduxjs/toolkit';
export declare const createShortLink: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: import("@apollo/client").ApolloClient<import("@apollo/client").NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getUrlQRCode: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {
        gqClient: import("@apollo/client").ApolloClient<import("@apollo/client").NormalizedCacheObject>;
    };
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const shareReducer: import("redux").Reducer<{}, import("redux").AnyAction>;
