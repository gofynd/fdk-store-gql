import { CommonAsyncLoadingTypes } from ".";
export type Collections = Partial<any & CommonAsyncLoadingTypes>;
export type Item = Partial<any & CommonAsyncLoadingTypes>;
export type CollectionsSlice = {
    collection: Collections;
    item: Item;
};
