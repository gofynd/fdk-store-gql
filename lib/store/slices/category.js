import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    category: {},
};
const categorySlice = createSlice({
    name: STORE_KEYS.CATEGORY,
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(`${STORE_KEYS.CATEGORY}/setData`, (state, action) => {
            Object.assign(state, action.payload);
        });
    },
});
export const categoryReducer = categorySlice.reducer;
export const { setCategory } = categorySlice.actions;
//# sourceMappingURL=category.js.map