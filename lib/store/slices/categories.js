import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    categories: {},
};
const categoriesSlice = createSlice({
    name: STORE_KEYS.CATEGORIES,
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload;
        },
    },
});
export const categoriesReducer = categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;
//# sourceMappingURL=categories.js.map