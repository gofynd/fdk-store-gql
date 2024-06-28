import { SerializedError } from "@reduxjs/toolkit";
import { BrandsSlice } from "../../types/brands";
export declare const fetchBrands: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const fetchBrand: import("@reduxjs/toolkit").AsyncThunk<any, any, {
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
export declare const brandsReducer: import("redux").Reducer<BrandsSlice, import("redux").AnyAction>;
