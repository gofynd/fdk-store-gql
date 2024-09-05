import { SerializedError } from "@reduxjs/toolkit";
import { BrandsSlice } from "../../types/brands";
import { BrandConnection } from "../../types/graphql";
export declare const fetchBrands: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchBrand: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const brandsReducer: import("redux").Reducer<BrandsSlice, import("redux").AnyAction>;
export declare const setBrands: import("@reduxjs/toolkit").ActionCreatorWithPayload<BrandConnection, "brands/setBrands">;
