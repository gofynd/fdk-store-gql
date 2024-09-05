import { CollectionsSlice } from "../../types/collection";
import { Collection, CollectionItems } from "../../types/graphql";
export declare const fetchCollection: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchCollectionItem: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const collectionReducer: import("redux").Reducer<CollectionsSlice, import("redux").AnyAction>;
export declare const setcollection: import("@reduxjs/toolkit").ActionCreatorWithPayload<Collection, "collection/setcollection">, setcollectionItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<CollectionItems, "collection/setcollectionItems">;
