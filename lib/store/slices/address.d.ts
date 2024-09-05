import { AddressSlice } from "../../types/address";
import { Address, Addresses, UpdateAddressResponse } from "../../types/graphql";
export declare const fetchAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchAddressById: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addAddress: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addressReducer: import("redux").Reducer<AddressSlice, import("redux").AnyAction>;
export declare const setAddressItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<Address, "address/setAddressItem">, setAddresses: import("@reduxjs/toolkit").ActionCreatorWithPayload<Addresses, "address/setAddresses">, setupdateAddress: import("@reduxjs/toolkit").ActionCreatorWithPayload<UpdateAddressResponse, "address/setupdateAddress">;
