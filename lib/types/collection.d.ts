import { CommonAsyncLoadingTypes } from ".";
import { CollectionConnection } from "./graphql";
export type Collections = Partial<any & CommonAsyncLoadingTypes>;
export type Item = Partial<any & CommonAsyncLoadingTypes>;
export type collections = Partial<CollectionConnection & CommonAsyncLoadingTypes>;
export type CollectionsSlice = {
    collection: Collections;
    item: Item;
    collections: collections;
};
