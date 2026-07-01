import { CategorySlice } from "../../types/category";
import { Category } from "../../types/graphql";
export declare const categoryReducer: import("redux").Reducer<CategorySlice, import("redux").AnyAction>;
export declare const setCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<Category, "category/setCategory">;
