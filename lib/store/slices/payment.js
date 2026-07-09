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
import { verifyCardDetails, getUpiIntentApps, handleCODOrder, handleQrOrder, handleUpiOrder, transactOrder, splitCheckout, transactSplit, } from "../utils/payment";
const initialState = {
    payment_options: {},
    aggregators_config: {},
};
export const getSupportedUpiIntentApps = createAsyncThunk("getSupportedUpiIntentApps", (payload, { extra, getState }) => __awaiter(void 0, void 0, void 0, function* () {
    const { payment, paymentflow, aggregator_name, queryParams } = payload;
    const mutablePayment = Object.assign({}, payment);
    if (mutablePayment.payment_meta) {
        // Only for backword compatiblity
        mutablePayment.paymentFlowMeta = payment.payment_meta;
    }
    else {
        mutablePayment.paymentFlowMeta = paymentflow;
    }
    const paymentOptions = {
        payment: mutablePayment,
        aggregator: aggregator_name || queryParams.aggregator_name,
    };
    return getUpiIntentApps(paymentOptions);
}));
export const validateCardDetails = createAsyncThunk("validateCardDetails", (payload, { extra, getState }) => {
    const { payment, paymentflow, aggregator_name, inputType, options, callback, } = payload;
    const mutablePayment = Object.assign({}, payment);
    if (mutablePayment.payment_meta) {
        // Only for backword compatiblity
        mutablePayment.paymentFlowMeta = payment.payment_meta;
    }
    else {
        mutablePayment.paymentFlowMeta = paymentflow;
    }
    const paymentOptions = {
        payment: mutablePayment,
        aggregator: aggregator_name,
        inputType,
        options,
        callback,
    };
    return verifyCardDetails(paymentOptions);
});
export const checkoutPayment = createAsyncThunk("checkoutPayment", (payload, { extra, getState, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const locale = ((_b = (_a = getCookie(COOKIE_KEYS.I18N_DETAILS)) === null || _a === void 0 ? void 0 : _a.language) === null || _b === void 0 ? void 0 : _b.locale) || "";
    const { cart_id, payment, meta, custom_meta, paymentflow = {}, address_id = null, billing_address_id = null, aggregator_name, payment_identifier = "", payment_extra_identifiers, payment_mode, queryParams, upi_app = "", buy_now = null, data, enableLinkPaymentOption = false, success = false, billing_address = {}, payment_methods = [], ordering_store, staff, delivery_address = {}, } = payload;
    const mutablePayment = Object.assign({}, payment);
    if (mutablePayment.payment_meta) {
        // Only for backword compatiblity
        mutablePayment.paymentFlowMeta = payment.payment_meta;
    }
    else {
        mutablePayment.paymentFlowMeta = paymentflow;
    }
    removeCookie(COOKIE_KEYS.USER_CART);
    const paymentOptions = enableLinkPaymentOption ?
        {
            aggregator: aggregator_name || queryParams.aggregator_name,
            payment_identifier: payment_identifier || (queryParams === null || queryParams === void 0 ? void 0 : queryParams.payment_identifier),
            payment_mode: payment_mode || queryParams.payment_mode,
            payment: mutablePayment,
            payment_extra_identifiers,
            meta,
            data,
            enableLinkPaymentOption,
            ordering_store: ordering_store,
            staff,
            upi_app: upi_app,
            success: success,
        }
        : Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ address_id: address_id || queryParams.address_id, billing_address_id: billing_address_id ||
                queryParams.billing_address_id ||
                queryParams.address_id, aggregator: aggregator_name || queryParams.aggregator_name, payment_identifier: payment_identifier || (queryParams === null || queryParams === void 0 ? void 0 : queryParams.payment_identifier), payment_mode: payment_mode || queryParams.payment_mode, callback_url: window.location.origin +
                (locale && locale !== "en" ?
                    `/${locale}/cart/order-status`
                    : "/cart/order-status"), payment: mutablePayment, payment_extra_identifiers,
            meta,
            data,
            enableLinkPaymentOption }, (cart_id ? { id: cart_id } : {})), (custom_meta && custom_meta.length > 0 ? { custom_meta } : {})), { ordering_store: ordering_store, staff, upi_app: upi_app, buy_now, locale: locale && locale !== "en" ? locale : "", payment_methods }), (billing_address ? { billing_address } : {})), (delivery_address ? { delivery_address } : {}));
    if (!enableLinkPaymentOption) {
        const depStoreId = getCookie(COOKIE_KEYS.DEPLOYMENT_STORE);
        let ordering_store_id = getCookie(COOKIE_KEYS.ORDERING_STORE) || (depStoreId && depStoreId.uid);
        if (ordering_store_id) {
            paymentOptions.ordering_store = ordering_store_id;
        }
    }
    try {
        if (paymentOptions.payment_mode === "COD" ||
            paymentOptions.payment_mode === "PP" ||
            paymentOptions.payment_mode === "CREDITNOTE") {
            return yield handleCODOrder(paymentOptions);
        }
        else if (paymentOptions.payment_mode === "QR") {
            return yield handleQrOrder(paymentOptions);
        }
        else if (paymentOptions.payment_mode === "UPI" &&
            !upi_app &&
            paymentOptions.aggregator !== "Razorpay") {
            return yield handleUpiOrder(paymentOptions);
        }
        //transact with payment gateway
        return yield transactOrder(paymentOptions, window.fpi.store.getState());
    }
    catch (error) {
        console.log(error);
        const { message, status_code } = error.errors[0] || {};
        return rejectWithValue({
            message,
            code: status_code,
        });
    }
}));
export const createSplitOrder = createAsyncThunk("createSplitOrder", (payload, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e, _f;
    const { cart_id, address_id = null, billing_address_id = null, billing_address = null, delivery_address = null, aggregator_name = "Fynd", payment = {}, paymentflow = {}, success_callback_url, failure_callback_url, meta, custom_meta, order_type, ordering_store, staff, buy_now = null, } = payload;
    const mutablePayment = Object.assign({}, payment);
    if (mutablePayment.payment_meta) {
        mutablePayment.paymentFlowMeta = payment.payment_meta;
    }
    else {
        mutablePayment.paymentFlowMeta = paymentflow;
    }
    const paymentOptions = {
        id: cart_id,
        address_id,
        billing_address_id,
        billing_address,
        delivery_address,
        aggregator: aggregator_name,
        payment_mode: "SPLIT",
        payment: mutablePayment,
        success_callback_url,
        failure_callback_url,
        meta,
        custom_meta,
        order_type,
        ordering_store,
        staff,
        buy_now,
    };
    try {
        return yield splitCheckout(paymentOptions);
    }
    catch (error) {
        // splitCheckout throws the raw response on success:false, where the failure
        // details live under data.checkoutCart (not error.errors).
        const gqlError = (_c = error === null || error === void 0 ? void 0 : error.errors) === null || _c === void 0 ? void 0 : _c[0];
        const body = (_d = error === null || error === void 0 ? void 0 : error.data) === null || _d === void 0 ? void 0 : _d.checkoutCart;
        return rejectWithValue({
            message: (_e = gqlError === null || gqlError === void 0 ? void 0 : gqlError.message) !== null && _e !== void 0 ? _e : body === null || body === void 0 ? void 0 : body.message,
            code: (_f = gqlError === null || gqlError === void 0 ? void 0 : gqlError.status_code) !== null && _f !== void 0 ? _f : body === null || body === void 0 ? void 0 : body.status_code,
        });
    }
}));
export const paySplit = createAsyncThunk("paySplit", (payload, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h, _j, _k;
    const { order_id, cart_id, amount, payment_mode, aggregator_name, payment_identifier = "", merchant_code = "", payment = {}, paymentflow = {}, name, shipment_id, upi_app = "", } = payload;
    const mutablePayment = Object.assign({}, payment);
    if (mutablePayment.payment_meta) {
        mutablePayment.paymentFlowMeta = payment.payment_meta;
    }
    else {
        mutablePayment.paymentFlowMeta = paymentflow;
    }
    const paymentOptions = {
        order_id,
        cart_id,
        amount,
        payment_mode,
        aggregator: aggregator_name,
        payment_identifier,
        merchant_code,
        payment: mutablePayment,
        name,
        shipment_id,
        upi_app,
    };
    try {
        return yield transactSplit(paymentOptions, window.fpi.store.getState());
    }
    catch (error) {
        // transactSplit throws the raw response on success:false, where the failure
        // details live under data.createPaymentOrder (not error.errors).
        const gqlError = (_g = error === null || error === void 0 ? void 0 : error.errors) === null || _g === void 0 ? void 0 : _g[0];
        const body = (_h = error === null || error === void 0 ? void 0 : error.data) === null || _h === void 0 ? void 0 : _h.createPaymentOrder;
        return rejectWithValue({
            message: (_j = gqlError === null || gqlError === void 0 ? void 0 : gqlError.message) !== null && _j !== void 0 ? _j : body === null || body === void 0 ? void 0 : body.message,
            code: (_k = gqlError === null || gqlError === void 0 ? void 0 : gqlError.status_code) !== null && _k !== void 0 ? _k : body === null || body === void 0 ? void 0 : body.status_code,
        });
    }
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
    extraReducers: (builder) => {
        builder.addCase(`${STORE_KEYS.PAYMENT}/setData`, (state, action) => {
            Object.assign(state, action.payload);
        });
    },
});
export const paymentReducer = paymentSlice.reducer;
export const { setPaymentModeRoutes, setaggregatorsConfig } = paymentSlice.actions;
//# sourceMappingURL=payment.js.map