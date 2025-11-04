import { createSlice } from "@reduxjs/toolkit";
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
        },
    },
});
export const cartReducer = cartSlice.reducer;
export const { setCart, setaddItemsToCart, setUpdateCartMeta, setrewardPoints, setapplyCoupon, setremoveCoupon, setCartShipmentDetails, setgetCartShareLink, setUpdateCart, setproductLadderPromotion, setpromotionOffers, setcoupons, } = cartSlice.actions;
//# sourceMappingURL=cart.js.map