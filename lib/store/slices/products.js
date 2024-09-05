var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    product_lists: {},
    product_listing_meta: {},
    category_listing_meta: {},
    collection_listing_meta: {},
    brand_listing_meta: {},
    search_results: {},
    product_search_results: {},
};
export const fetchProducts = createAsyncThunk("getProducts", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchSuggestions = createAsyncThunk("searchResults", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchProductSuggestions = createAsyncThunk("productSearchResults", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchProductListingMeta = createAsyncThunk("fetchProductListingMeta", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchCategoryListingMeta = createAsyncThunk("fetchCategoryListingMeta", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchBrandListingMeta = createAsyncThunk("fetchBrandListingMeta", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchCollectionListingMeta = createAsyncThunk("fetchCollectionListingMeta", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
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
        }
    },
    extraReducers: (builder) => {
        builder
            //get products list
            .addCase(fetchProducts.pending, (state) => {
            state.product_lists = {
                loading: true,
            };
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
            state.product_lists = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchProducts.rejected, (state, action) => {
            state.product_lists = Object.assign({}, { error: action.error, loading: false });
        })
            //search results
            .addCase(fetchSuggestions.pending, (state) => {
            state.search_results = {
                loading: true,
            };
        })
            .addCase(fetchSuggestions.fulfilled, (state, action) => {
            state.search_results = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchSuggestions.rejected, (state, action) => {
            state.search_results = Object.assign({}, { error: action.error, loading: false });
        })
            //product search results
            .addCase(fetchProductSuggestions.pending, (state) => {
            state.product_search_results = {
                loading: true,
            };
        })
            .addCase(fetchProductSuggestions.fulfilled, (state, action) => {
            state.product_search_results = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchProductSuggestions.rejected, (state, action) => {
            state.product_search_results = Object.assign({}, { error: action.error, loading: false });
        })
            // fetchProductListingMeta results
            .addCase(fetchProductListingMeta.pending, (state) => {
            state.product_listing_meta = {
                loading: true,
            };
        })
            .addCase(fetchProductListingMeta.fulfilled, (state, action) => {
            state.product_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchProductListingMeta.rejected, (state, action) => {
            state.product_listing_meta = Object.assign({}, { error: action.error, loading: false });
        })
            // fetchCategoryListingMeta results
            .addCase(fetchCategoryListingMeta.pending, (state) => {
            state.category_listing_meta = {
                loading: true,
            };
        })
            .addCase(fetchCategoryListingMeta.fulfilled, (state, action) => {
            state.category_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCategoryListingMeta.rejected, (state, action) => {
            state.category_listing_meta = Object.assign({}, { error: action.error, loading: false });
        })
            // fetchBrandListingMeta results
            .addCase(fetchBrandListingMeta.pending, (state) => {
            state.brand_listing_meta = {
                loading: true,
            };
        })
            .addCase(fetchBrandListingMeta.fulfilled, (state, action) => {
            state.brand_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchBrandListingMeta.rejected, (state, action) => {
            state.brand_listing_meta = Object.assign({}, { error: action.error, loading: false });
        })
            // fetchCollectionListingMeta results
            .addCase(fetchCollectionListingMeta.pending, (state) => {
            state.collection_listing_meta = {
                loading: true,
            };
        })
            .addCase(fetchCollectionListingMeta.fulfilled, (state, action) => {
            state.collection_listing_meta = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCollectionListingMeta.rejected, (state, action) => {
            state.collection_listing_meta = Object.assign({}, { error: action.error, loading: false });
        });
    },
});
export const plpReducer = plpSlice.reducer;
export const { resetProductListingMeta, setProducts } = plpSlice.actions;
//# sourceMappingURL=products.js.map