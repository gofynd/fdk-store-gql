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
import { getCookie, removeCookie } from "../../helpers/utils";
import { COOKIE_KEYS, STORE_KEYS } from "../enums/keys";
import { handleCODOrder, transactOrder, } from "../utils/payment";
const initialState = {
    payment_options: {},
    aggregators_config: {},
};
export const checkoutPayment = createAsyncThunk("checkoutPayment", (payload, { extra, getState }) => __awaiter(void 0, void 0, void 0, function* () {
    const { cart_id, payment, meta, custom_meta, paymentflow, address_id, billing_address_id, aggregator_name, payment_identifier, payment_mode, queryParams, callback_url = "", payment_config = "", merchant_code = "", } = payload;
    const mutablePayment = Object.assign({}, payment);
    if (mutablePayment.payment_meta) {
        // Only for backword compatiblity
        mutablePayment.paymentFlowMeta = payment.payment_meta;
    }
    else {
        mutablePayment.paymentFlowMeta = paymentflow;
    }
    removeCookie(COOKIE_KEYS.USER_CART);
    const paymentOptions = Object.assign(Object.assign(Object.assign({ address_id: address_id || queryParams.address_id, billing_address_id: billing_address_id ||
            queryParams.billing_address_id ||
            queryParams.address_id, aggregator: aggregator_name || queryParams.aggregator_name, payment_identifier: payment_identifier || queryParams.payment_identifier, payment_mode: payment_mode || queryParams.payment_mode, callback_url: window.location.origin + "/cart/order-status", payment: mutablePayment, meta }, (cart_id ? { id: cart_id } : {})), (custom_meta && custom_meta.length > 0 ? { custom_meta } : {})), { ordering_store: undefined });
    const depStoreId = getCookie(COOKIE_KEYS.DEPLOYMENT_STORE);
    let ordering_store_id = getCookie(COOKIE_KEYS.ORDERING_STORE) || (depStoreId && depStoreId.uid);
    if (ordering_store_id) {
        paymentOptions.ordering_store = ordering_store_id;
    }
    if (paymentOptions.payment_mode === "COD") {
        return handleCODOrder(paymentOptions);
    }
    //transact with payment gateway
    return transactOrder(paymentOptions, window.fpi.store.getState());
}));
const paymentSlice = createSlice({
    name: STORE_KEYS.PAYMENT,
    initialState,
    reducers: {
        setPaymentModeRoutes(state, action) {
            state.payment_options = action.payload;
        },
        setaggregatorsConfig(state, action) {
            state.aggregators_config = action.payload;
        },
    },
});
export const paymentReducer = paymentSlice.reducer;
export const { setPaymentModeRoutes, setaggregatorsConfig } = paymentSlice.actions;
//# sourceMappingURL=payment.js.map