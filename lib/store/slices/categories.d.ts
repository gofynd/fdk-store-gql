import { CategoriesSlice } from "../../types/categories";
import { Categories } from "../../types/graphql";
export declare const categoriesReducer: import("redux").Reducer<CategoriesSlice, import("redux").AnyAction>;
export declare const setCategories: import("@reduxjs/toolkit").ActionCreatorWithPayload<Categories, "categories/setCategories">;
