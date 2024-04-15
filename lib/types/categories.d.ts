import { CommonAsyncLoadingTypes } from ".";
export type Categories = Partial<any & CommonAsyncLoadingTypes>;
export type CategoriesSlice = {
    categories: Categories;
};
