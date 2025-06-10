import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    product_details: {},
    product_variants: {},
    product_meta: {},
    bulk_price: {},
    similar_compare_products: {},
    frequently_compared_products: {},
    product_price_by_slug: {},
    product_seller_by_slug: {},
    follow_by_id: {},
    follower_count_by_id: {},
    followed_listing: {},
    fetch_follow_ids: {},
    followed_products: {},
    unfollow_by_id: {},
};
const pdpSlice = createSlice({
    name: STORE_KEYS.PRODUCT_DETAILS,
    initialState,
    reducers: {
        setProduct(state, action) {
            state.product_details = action.payload;
            state.product_meta = action.payload;
        },
        setProductVariants(state, action) {
            state.product_variants = action.payload;
        },
        setbulkDiscountOffers(state, action) {
            state.bulk_price = action.payload;
        },
        setcompareSimilarProduct(state, action) {
            state.similar_compare_products = action.payload;
        },
        setcompareWithFrequentlyCompared(state, action) {
            state.frequently_compared_products = action.payload;
        },
        setproductPrice(state, action) {
            state.product_price_by_slug = action.payload;
        },
        setFollowListing(state, action) {
            state.followed_listing = action.payload;
        },
        setfollowerCount(state, action) {
            state.follower_count_by_id = action.payload;
        },
        setfollowedProducts(state, action) {
            state.followed_products = action.payload;
        },
        setproductSellers(state, action) {
            // let currentItems = action.product_seller_by_slug.items || [];
            // let items;
            // if (Number(action.payload.page.current) > 1) {
            //   items = currentItems.concat(action.payload.items || []);
            // } else {
            //   items = action.payload.items;
            // }
            // state.product_seller_by_slug.items = {
            //   ...items,
            //   error: null,
            //   loading: false,
            // };
            state.product_seller_by_slug = action.payload;
        },
    },
});
export const pdpReducer = pdpSlice.reducer;
export const { setProduct, setfollowerCount, setproductSellers, setproductPrice, setcompareWithFrequentlyCompared, setProductVariants, setbulkDiscountOffers, setFollowListing, setcompareSimilarProduct, setfollowedProducts, } = pdpSlice.actions;
//# sourceMappingURL=product.js.map