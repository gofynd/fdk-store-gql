import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    product_lists: {},
    product_listing_meta: {},
    search_results: {},
    product_search_results: {},
};
const plpSlice = createSlice({
    name: "products",
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
});
export const plpReducer = plpSlice.reducer;
export const { resetProductListingMeta, setProducts } = plpSlice.actions;
//# sourceMappingURL=products.js.map