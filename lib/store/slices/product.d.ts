import { AnyAction, Reducer, SerializedError } from "@reduxjs/toolkit";
import { ProductSlice } from "../../types/product";
import { BulkDiscountOffers, FollowerCount, FollowListing, Product, ProductCompareDetails, ProductSellers, ProductSizePrice } from "../../types/graphql";
export declare const fetchProductDetails: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductVariants: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const followById: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFollowerCountById: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFollowedListing: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFollowIds: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const unfollowById: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchBulkPrice: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchSimilarCompareProduct: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFrequentlyComparedProducts: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductPriceBySlug: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getProductBundlesBySlug: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductSellerBySlug: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const pdpReducer: Reducer<ProductSlice, AnyAction>;
export declare const setProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<Product, "product/setProduct">, setfollowerCount: import("@reduxjs/toolkit").ActionCreatorWithPayload<FollowerCount, "product/setfollowerCount">, setproductSellers: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductSellers, "product/setproductSellers">, setproductPrice: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductSizePrice, "product/setproductPrice">, setcompareWithFrequentlyCompared: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "product/setcompareWithFrequentlyCompared">, setProductVariants: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "product/setProductVariants">, setbulkDiscountOffers: import("@reduxjs/toolkit").ActionCreatorWithPayload<BulkDiscountOffers, "product/setbulkDiscountOffers">, setFollowListing: import("@reduxjs/toolkit").ActionCreatorWithPayload<FollowListing, "product/setFollowListing">, setcompareSimilarProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductCompareDetails, "product/setcompareSimilarProduct">, setfollowedProducts: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "product/setfollowedProducts">;
