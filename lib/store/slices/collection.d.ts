import { CollectionsSlice } from "../../types/collection";
import { Collection, CollectionConnection, CollectionItems } from "../../types/graphql";
export declare const collectionReducer: import("redux").Reducer<CollectionsSlice, import("redux").AnyAction>;
export declare const setcollection: import("@reduxjs/toolkit").ActionCreatorWithPayload<Collection, "collection/setcollection">, setcollectionItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<CollectionItems, "collection/setcollectionItems">, setcollections: import("@reduxjs/toolkit").ActionCreatorWithPayload<CollectionConnection, "collection/setcollections">;
