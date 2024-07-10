var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
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
export const fetchProductDetails = createAsyncThunk("getProductDetails", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchProductVariants = createAsyncThunk("getProductVariants", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const followById = createAsyncThunk("followById", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchFollowerCountById = createAsyncThunk("fetchFollowerCountById", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchFollowedListing = createAsyncThunk("fetchFollowedListing", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchFollowIds = createAsyncThunk("fetchFollowIds", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const unfollowById = createAsyncThunk("unfollowById", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchBulkPrice = createAsyncThunk("getBulkPrice", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchSimilarCompareProduct = createAsyncThunk("getSimilarCompareProduct", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchFrequentlyComparedProducts = createAsyncThunk("getFrequentlyComparedProducts", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchProductPriceBySlug = createAsyncThunk("getProductPriceBySlug", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const getProductBundlesBySlug = createAsyncThunk("getProductPriceBySlug", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchProductSellerBySlug = createAsyncThunk("getProductSellerBySlug", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetails.pending, (state) => {
            state.product_details = {
                loading: true,
            };
            state.product_meta = {
                loading: true,
            };
        })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.product_details = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
            //product meta
            state.product_meta = Object.assign(Object.assign({}, action.payload.sizes), { error: null, loading: false });
        })
            .addCase(fetchProductDetails.rejected, (state, action) => {
            state.product_details = Object.assign({}, { error: action.error, loading: false });
            state.product_meta = Object.assign({}, { error: action.error, loading: false });
        })
            // product variants
            .addCase(fetchProductVariants.pending, (state) => {
            state.product_variants = {
                loading: true,
            };
        })
            .addCase(fetchProductVariants.fulfilled, (state, action) => {
            state.product_variants = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchProductVariants.rejected, (state, action) => {
            state.product_variants = Object.assign({}, { error: action.error, loading: false });
        })
            //followById
            .addCase(followById.pending, (state) => {
            state.follow_by_id = {
                loading: true,
            };
        })
            .addCase(followById.fulfilled, (state, action) => {
            state.follow_by_id = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(followById.rejected, (state, action) => {
            state.follow_by_id = {
                error: action === null || action === void 0 ? void 0 : action.error,
                loading: false,
            };
        })
            //fetchFollowerCountById
            .addCase(fetchFollowerCountById.pending, (state) => {
            state.follower_count_by_id = {
                loading: true,
            };
        })
            .addCase(fetchFollowerCountById.fulfilled, (state, action) => {
            state.follower_count_by_id = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchFollowerCountById.rejected, (state, action) => {
            state.follower_count_by_id = Object.assign({}, { error: action === null || action === void 0 ? void 0 : action.error, loading: false });
        })
            //fetchFollowedListing
            .addCase(fetchFollowedListing.pending, (state) => {
            state.followed_listing = {
                loading: true,
            };
        })
            .addCase(fetchFollowedListing.fulfilled, (state, action) => {
            state.followed_listing = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchFollowedListing.rejected, (state, action) => {
            state.followed_listing = Object.assign({}, { error: action === null || action === void 0 ? void 0 : action.error, loading: false });
        })
            //fetchFollowIds
            .addCase(fetchFollowIds.pending, (state) => {
            state.fetch_follow_ids = {
                loading: true,
            };
        })
            .addCase(fetchFollowIds.fulfilled, (state, action) => {
            state.fetch_follow_ids = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchFollowIds.rejected, (state, action) => {
            state.fetch_follow_ids = Object.assign({}, { error: action === null || action === void 0 ? void 0 : action.error, loading: false });
        })
            //unfollowById
            .addCase(unfollowById.pending, (state) => {
            state.unfollow_by_id = {
                loading: true,
            };
        })
            .addCase(unfollowById.fulfilled, (state, action) => {
            state.unfollow_by_id = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(unfollowById.rejected, (state, action) => {
            state.unfollow_by_id = Object.assign({}, { error: action === null || action === void 0 ? void 0 : action.error, loading: false });
        })
            //bulk price
            .addCase(fetchBulkPrice.pending, (state) => {
            state.bulk_price = {
                loading: true,
            };
        })
            .addCase(fetchBulkPrice.fulfilled, (state, action) => {
            state.bulk_price = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchBulkPrice.rejected, (state, action) => {
            state.bulk_price = Object.assign({}, { error: action.error, loading: false });
        })
            //similar_compare_products
            .addCase(fetchSimilarCompareProduct.pending, (state) => {
            state.similar_compare_products = {
                loading: true,
            };
        })
            .addCase(fetchSimilarCompareProduct.fulfilled, (state, action) => {
            state.similar_compare_products = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchSimilarCompareProduct.rejected, (state, action) => {
            state.similar_compare_products = Object.assign({}, { error: action.error, loading: false });
        })
            //frequently_compared_products
            .addCase(fetchFrequentlyComparedProducts.pending, (state) => {
            state.frequently_compared_products = {
                loading: true,
            };
        })
            .addCase(fetchFrequentlyComparedProducts.fulfilled, (state, action) => {
            state.frequently_compared_products = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchFrequentlyComparedProducts.rejected, (state, action) => {
            state.frequently_compared_products = Object.assign({}, { error: action.error, loading: false });
        })
            //product price by slug
            .addCase(fetchProductPriceBySlug.pending, (state) => {
            state.product_price_by_slug = {
                loading: true,
            };
        })
            .addCase(fetchProductPriceBySlug.fulfilled, (state, action) => {
            state.product_price_by_slug = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchProductPriceBySlug.rejected, (state, action) => {
            state.product_price_by_slug = {
                error: action === null || action === void 0 ? void 0 : action.error,
                loading: false,
            };
        })
            //Product Seller By Slug
            .addCase(fetchProductSellerBySlug.pending, (state) => {
            state.product_seller_by_slug = {
                loading: true,
            };
        })
            .addCase(fetchProductSellerBySlug.fulfilled, (state, action) => {
            let currentItems = state.product_seller_by_slug.items || [];
            let items;
            if (Number(action.payload.page.current) > 1) {
                items = currentItems.concat(action.payload.items || []);
            }
            else {
                items = action.payload.items;
            }
            state.product_seller_by_slug.items = Object.assign(Object.assign({}, items), { error: null, loading: false });
        })
            .addCase(fetchProductSellerBySlug.rejected, (state, action) => {
            state.product_seller_by_slug = Object.assign({}, { error: action === null || action === void 0 ? void 0 : action.error, loading: false });
        });
    },
});
export const pdpReducer = pdpSlice.reducer;
export const { setProduct, setfollowerCount, setproductSellers, setproductPrice, setcompareWithFrequentlyCompared, setProductVariants, setbulkDiscountOffers, setFollowListing, setcompareSimilarProduct, setfollowedProducts, } = pdpSlice.actions;
//# sourceMappingURL=product.js.map