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
import { cartItemsCount } from "../../helpers/utils";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    cart_items: {},
    buy_now_cart_items: {},
    checkout_mode: {
        mode: "self",
    },
    cart_items_count: {},
    shipments: {},
    ladder_offers: {},
    promotion_offers: {},
    coupons: {},
    cart_share_link: {},
};
export const fetchCartItems = createAsyncThunk("cartItems", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchBuyNowCartItems = createAsyncThunk("buyNowCartItems", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchShipments = createAsyncThunk("shipments", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchLadderOffers = createAsyncThunk("ladderOffers", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchPromotionOffers = createAsyncThunk("prmotionOffers", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchCoupons = createAsyncThunk("coupons", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchCartShareLink = createAsyncThunk("cartShareLink", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const selectPaymentMode = createAsyncThunk("selectPaymentMode", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const checkoutCart = createAsyncThunk("checkoutCart", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const addToCartBuyNow = createAsyncThunk("addToCartBuyNow", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const addToCart = createAsyncThunk("addToCart", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const getCartItemsCount = createAsyncThunk("getCartItemsCount", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const updateCartItems = createAsyncThunk("updateCartItems", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const removeCartItem = createAsyncThunk("removeCartItem", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const updateCheckoutMode = createAsyncThunk("updateCheckoutMode", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const applyCoupon = createAsyncThunk("applyCoupon", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const removeCoupon = createAsyncThunk("removeCoupon", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const updateRewardPoints = createAsyncThunk("updateRewardPoints", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const selectAddress = createAsyncThunk("selectAddress", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const updateCartMeta = createAsyncThunk("updateCartMeta", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
const cartSlice = createSlice({
    name: STORE_KEYS.CART,
    initialState,
    reducers: {
        setCart(state, action) {
            state.cart_items = action.payload;
        },
        setCartShipmentDetails(state, action) {
            state.shipments = action.payload;
        },
        setUpdateCart(state, action) {
            state.cart_items = action.payload;
        },
        setproductLadderPromotion(state, action) {
            state.ladder_offers = action.payload;
        },
        setpromotionOffers(state, action) {
            state.promotion_offers = action.payload;
        },
        setcoupons(state, action) {
            state.coupons = action.payload;
        },
        setgetCartShareLink(state, action) {
            state.cart_share_link = action.payload;
        },
        setUpdateCartMeta(state, action) {
            state.checkout_mode = action.payload;
        },
        setaddItemsToCart(state, action) {
            state.buy_now_cart_items = action.payload || {};
            state.cart_items_count.user_cart_items_count = cartItemsCount(action.payload || {});
        },
        setapplyCoupon(state, action) {
            state.cart_items = action.payload;
        },
        setremoveCoupon(state, action) {
            state.cart_items = action.payload;
        },
        setrewardPoints(state, action) {
            state.cart_items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            //get cart items
            .addCase(fetchCartItems.pending, (state) => {
            state.cart_items = { loading: true };
        })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
            state.cart_items = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCartItems.rejected, (state, action) => {
            state.cart_items = Object.assign({}, { error: action.error, loading: false });
        })
            // get buy now cart items
            .addCase(fetchBuyNowCartItems.pending, (state) => {
            state.buy_now_cart_items = { loading: true };
        })
            .addCase(fetchBuyNowCartItems.fulfilled, (state, action) => {
            state.buy_now_cart_items = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchBuyNowCartItems.rejected, (state, action) => {
            state.buy_now_cart_items = Object.assign({}, { error: action.error, loading: false });
        })
            // get shipments
            .addCase(fetchShipments.pending, (state) => {
            state.shipments = {
                loading: true,
            };
        })
            .addCase(fetchShipments.fulfilled, (state, action) => {
            state.shipments = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchShipments.rejected, (state, action) => {
            state.shipments = Object.assign({}, { error: action.error, loading: false });
        })
            //ladder offers
            .addCase(fetchLadderOffers.pending, (state) => {
            state.ladder_offers = {
                loading: true,
            };
        })
            .addCase(fetchLadderOffers.fulfilled, (state, action) => {
            state.ladder_offers = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchLadderOffers.rejected, (state, action) => {
            state.ladder_offers = Object.assign({}, { error: action.error, loading: false });
        })
            //promotion offers
            .addCase(fetchPromotionOffers.pending, (state) => {
            state.promotion_offers = {
                loading: true,
            };
        })
            .addCase(fetchPromotionOffers.fulfilled, (state, action) => {
            state.promotion_offers = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchPromotionOffers.rejected, (state, action) => {
            state.promotion_offers = Object.assign({}, { error: action.error, loading: false });
        })
            //coupons
            .addCase(fetchCoupons.pending, (state) => {
            state.coupons = {
                loading: true,
            };
        })
            .addCase(fetchCoupons.fulfilled, (state, action) => {
            state.coupons = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCoupons.rejected, (state, action) => {
            state.coupons = Object.assign({}, { error: action.error, loading: false });
        })
            //cart share link
            .addCase(fetchCartShareLink.pending, (state) => {
            state.cart_share_link = {
                loading: true,
            };
        })
            .addCase(fetchCartShareLink.fulfilled, (state, action) => {
            state.cart_share_link = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCartShareLink.rejected, (state, action) => {
            state.cart_share_link = Object.assign({}, { error: action.error, loading: false });
        })
            //cart share link
            .addCase(addToCartBuyNow.pending, (state) => {
            state.buy_now_cart_items = { loading: true };
        })
            .addCase(addToCartBuyNow.fulfilled, (state, action) => {
            state.buy_now_cart_items = action.payload || {};
            state.cart_items_count.user_cart_items_count = cartItemsCount(action.payload || {});
            state.buy_now_cart_items.error = null;
            state.buy_now_cart_items.loading = false;
        })
            .addCase(addToCartBuyNow.rejected, (state, action) => {
            state.buy_now_cart_items = {
                error: action.error,
                loading: false,
            };
        })
            //cart share link
            .addCase(addToCart.pending, (state) => {
            state.cart_items = { loading: true };
        })
            .addCase(addToCart.fulfilled, (state, action) => {
            state.cart_items = Object.assign(Object.assign({}, (action.payload || {})), { error: null, loading: false });
        })
            .addCase(addToCart.rejected, (state, action) => {
            state.cart_items = Object.assign({}, { error: action.error, loading: false });
        })
            //cart share link
            .addCase(updateCartItems.pending, (state) => {
            state.cart_items = { loading: true };
        })
            .addCase(updateCartItems.fulfilled, (state, action) => {
            state.cart_items = action.payload || {};
            state.cart_items.user_cart_items_count = cartItemsCount(action.payload || {});
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(updateCartItems.rejected, (state, action) => {
            state.cart_items = Object.assign({}, { error: action.error, loading: false });
        })
            //cart share link
            .addCase(removeCartItem.pending, (state) => {
            state.cart_items = { loading: true };
        })
            .addCase(removeCartItem.fulfilled, (state, action) => {
            state.cart_items = action.payload || {};
            state.cart_items_count.user_cart_items_count = cartItemsCount(action.payload || {});
            state.cart_items.error = null;
            state.cart_items.loading = false;
        })
            .addCase(removeCartItem.rejected, (state, action) => {
            state.cart_items = Object.assign({}, { error: action.error, loading: false });
        })
            //cart share link
            .addCase(updateCheckoutMode.pending, (state) => {
            state.checkout_mode = { loading: true };
        })
            .addCase(updateCheckoutMode.fulfilled, (state, action) => {
            state.checkout_mode = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(updateCheckoutMode.rejected, (state, action) => {
            state.checkout_mode = Object.assign({}, { error: action.error, loading: false });
        })
            //cart share link
            .addCase(getCartItemsCount.pending, (state) => {
            state.cart_items_count = { loading: true };
        })
            .addCase(getCartItemsCount.fulfilled, (state, action) => {
            state.cart_items_count.user_cart_items_count = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getCartItemsCount.rejected, (state, action) => {
            state.cart_items_count = {
                user_cart_items_count: 0,
                error: action.error,
                loading: false,
            };
        })
            //cart share link
            .addCase(applyCoupon.pending, (state) => {
            state.cart_items = { loading: true };
        })
            .addCase(applyCoupon.fulfilled, (state, action) => {
            state.cart_items = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(applyCoupon.rejected, (state, action) => {
            state.cart_items = Object.assign({}, { error: action.error, loading: false });
        })
            //cart share link
            .addCase(removeCoupon.pending, (state) => {
            state.cart_items = { loading: true };
        })
            .addCase(removeCoupon.fulfilled, (state, action) => {
            state.cart_items = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(removeCoupon.rejected, (state, action) => {
            state.cart_items = Object.assign({}, { error: action.error, loading: false });
        })
            //cart share link
            .addCase(updateRewardPoints.pending, (state) => {
            state.cart_items = { loading: true };
        })
            .addCase(updateRewardPoints.fulfilled, (state, action) => {
            state.cart_items = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(updateRewardPoints.rejected, (state, action) => {
            state.cart_items = Object.assign({}, { error: action.error, loading: false });
        });
    },
});
export const cartReducer = cartSlice.reducer;
export const { setCart, setaddItemsToCart, setUpdateCartMeta, setrewardPoints, setapplyCoupon, setremoveCoupon, setCartShipmentDetails, setgetCartShareLink, setUpdateCart, setproductLadderPromotion, setpromotionOffers, setcoupons } = cartSlice.actions;
//# sourceMappingURL=cart.js.map