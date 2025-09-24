import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    product_lists: {},
    product_listing_meta: {},
    search_results: {},
    product_search_results: {},
};
const plpSlice = createSlice({
    name: STORE_KEYS.PRODUCTS,
    initialState,
    reducers: {
        resetProductListingMeta(state) {
            state.product_listing_meta = {
                error: null,
            };
        },
        setProducts(state, action) {
            state.product_lists = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(`${STORE_KEYS.PRODUCTS}/setData`, (state, action) => {
            Object.assign(state, action.payload);
        });
    },
});
export const plpReducer = plpSlice.reducer;
export const { resetProductListingMeta, setProducts } = plpSlice.actions;
//# sourceMappingURL=products.js.map