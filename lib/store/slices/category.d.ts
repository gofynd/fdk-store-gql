import { CategorySlice } from "../../types/category";
import { CategoryItem5 } from "../../types/graphql";
export declare const categoryReducer: import("redux").Reducer<CategorySlice, import("redux").AnyAction>;
export declare const setCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<CategoryItem5, "category/setCategory">;
