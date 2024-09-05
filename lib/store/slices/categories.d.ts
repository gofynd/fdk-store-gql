import { CategoriesSlice } from "../../types/categories";
import { Categories } from "../../types/graphql";
export declare const fetchCategories: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const categoriesReducer: import("redux").Reducer<CategoriesSlice, import("redux").AnyAction>;
export declare const setCategories: import("@reduxjs/toolkit").ActionCreatorWithPayload<Categories, "categories/setCategories">;
