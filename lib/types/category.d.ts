import { CommonAsyncLoadingTypes } from ".";
export type CategoryType = Partial<any & CommonAsyncLoadingTypes>;
export type CategorySlice = {
    category: CategoryType;
};
