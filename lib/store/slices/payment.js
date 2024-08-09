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
import { handleCODOrder, handleConfirmPayment, transactOrder, } from "../utils/payment";
import { fetchPincodeDetails } from "./logistic";
import { gql } from "@apollo/client";
const initialState = {
    payment_options: {},
    aggregators_config: {},
};
export const fetchPaymentOptions = createAsyncThunk("paymentOptions", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    // const { sdk } = extra;
    // return sdk.payment.getPaymentModeRoutes(params);
    return params;
}));
export const fetchAggregatorsConfig = createAsyncThunk("aggregatorConfig", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    // const { sdk } = extra;
    // return sdk.payment.getAggregatorsConfig();
    return params;
}));
export const verifyCustomerForPayment = createAsyncThunk("verifyCustomerForPayment", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    /*
      mutation VerifyCustomerForPayment {
      verifyCustomerForPayment(validateCustomerRequestInput: {
          aggregator: "null",
          billing_address: "null",
          delivery_address: "null",
          merchant_params: "null",
          order_items: "null",
          payload: "null",
          phone_number: "null",
          transaction_amount_in_paise: 1
      }) {
          data
          message
          success
      }
      }
      */
    return params;
}));
export const customerCreditSummary = createAsyncThunk("customerCreditSummary", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    // const { sdk } = extra;
    // return sdk.payment.customerCreditSummary(payload)
    /*
    query CustomerCreditSummary($aggregator: String) {
    customerCreditSummary: payment {
        customerCreditSummary(aggregator: $aggregator) {
        data {
            data {
            is_registered
            signup_url
            status
            }
            success
            activation_url
            amount_available {
            currency
            formatted_value
            value
            }
            balance {
            currency
            formatted_value
            value
            }
            buyer_status
            credit_line_id
            due_amount {
            currency
            formatted_value
            value
            }
            due_date
            is_eligible_for_txn
            limit {
            currency
            formatted_value
            value
            }
            merchant_customer_ref_id
            repayment_url
            soa_url
            status
            status_message
            total_due_amount {
            currency
            formatted_value
            value
            }
        }
        success
        }
    }
    }
    */
    return params;
}));
export const redirectToAggregator = createAsyncThunk("redirectToAggregator", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    // const { sdk } = extra;
    // return sdk.payment.redirectToAggregator(payload)
    return params;
}));
export const customerOnboard = createAsyncThunk("customerOnboard", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    /*
    mutation CustomerOnboard{
    customerOnboard(customerOnboardingRequestInput: {}) {
        data {
        redirect_url
        session
        status
        }
        success
    }
    }
    */
    // const { sdk } = extra;
    // return sdk.payment.customerOnboard(payload)
    return params;
}));
export const getEpaylaterBannerDetails = createAsyncThunk("getEpaylaterBannerDetails", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    // const { sdk } = extra;
    // return sdk.payment.getEpaylaterBannerDetails(payload)
    /*
      query EpayLaterBannerDetails {
      epayLaterBannerDetails: payment {
          epayLaterBannerDetails {
          success
          }
      }
      }
      */
    return params;
}));
export const getActiveCardAggregator = createAsyncThunk("getActiveCardAggregator", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    // const { sdk } = extra;
    // return sdk.payment.getActiveCardAggregator(payload)
    /*
      query ActiveCardAggregator($refresh: Boolean) {
      activeCardAggregator: payment {
          activeCardAggregator(refresh: $refresh) {
          data {
              display_name
              items {
              id
              display_name
              logo_large
              logo_small
              name
              }
          }
          }
      }
      }
      */
    return params;
}));
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
export const confirmPaymentAddress = createAsyncThunk("confirmPaymentAddress", (payload, { extra, dispatch }) => __awaiter(void 0, void 0, void 0, function* () {
    const { cart_id, address_id, billing_address_id, address_pincode } = payload;
    const { gqClient } = extra;
    let query = `mutation SelectAddress{
      selectAddress(cartId: "${cart_id}", selectAddressInput : {id : "${address_id}", billing_address_id : "${billing_address_id}", cart_id : "${cart_id}"}) {
        cart_id
        uid
        applied_promo_details {
          amount
          applied_free_articles {
            article_id
            free_gift_item_details {
              item_brand_name
              item_id
              item_images_url
              item_name
              item_price_details
              item_slug
            }
            parent_item_identifier
            quantity
          }
          article_quantity
          buy_rules {
            cart_conditions
            item_criteria
          }
          discount_rules {
            item_criteria
            matched_buy_rules
            offer
            raw_offer
          }
          mrp_promotion
          offer_text
          ownership {
            payable_by
            payable_category
          }
          promo_id
          promotion_group
          promotion_name
          promotion_type
        }
        checkout_mode
        pan_no
        is_valid
        id
        payment_selection_lock {
          default_options
          enabled
          payment_identifier
        }
        delivery_promise {
          formatted {
            max
            min
          }
          timestamp {
            max
            min
          }
        }
        comment
        items {
          article {
            _custom_json
            cart_item_meta
            extra_meta
            gift_card
            identifier
            is_gift_visible
            meta
            mto_quantity
            parent_item_identifiers
            price {
              base {
                currency_code
                currency_symbol
                effective
                marked
              }
              converted {
                currency_code
                currency_symbol
                effective
                marked
              }
            }
            product_group_tags
            quantity
            seller {
              name
              uid
            }
            seller_identifier
            size
            store {
              name
              store_code
              uid
            }
            type
            uid
          }
          availability {
            available_sizes {
              dimension {
                height
                is_default
                length
                unit
                width
              }
              display
              is_available
              quantity
              seller_identifiers
              value
              weight {
                is_default
                shipping
                unit
              }
            }
            deliverable
            is_valid
            other_store_quantity
            out_of_stock
            sizes
          }
          bulk_offer
          coupon {
            code
            discount_single_quantity
            discount_total_quantity
          }
          coupon_message
          custom_order
          delivery_promise {
            formatted {
              max
              min
            }
            timestamp {
              max
              min
            }
          }
          discount
          identifiers {
            identifier
          }
          is_set
          key
          message
          moq
          parent_item_identifiers
          price {
            base {
              add_on
              currency_code
              currency_symbol
              effective
              marked
              selling
            }
            converted {
              add_on
              currency_code
              currency_symbol
              effective
              marked
              selling
            }
          }
          price_per_unit {
            base {
              add_on
              currency_code
              currency_symbol
              effective
              marked
              selling
            }
            converted {
              add_on
              currency_code
              currency_symbol
              effective
              marked
              selling
            }
          }
          product {
            _custom_json
            action {
              query {
                product_slug
              }
              type
              url
            }
            brand {
              name
              uid
            }
            categories {
              name
              uid
            }
            images {
              aspect_ratio
              secure_url
              url
            }
            item_code
            name
            slug
            tags
            teaser_tag {
              tags
            }
            type
            uid
          }
          promo_meta {
            message
          }
          promotions_applied {
            amount
            article_quantity
            mrp_promotion
            offer_text
            promo_id
            promotion_group
            promotion_name
            promotion_type
          }
          quantity
        }
        delivery_charge_info
        common_config {
          delivery_charges_config {
            enabled
            charges {
              charges
              threshold
            }
          }
        }
        coupon {
          code
          coupon_type
          coupon_value
          description
          is_applied
          max_discount_value
          message
          minimum_cart_value
          sub_title
          title
          type
          uid
          value
          expires_on
          is_applicable
          coupon_code
        }
        message
        notification
        staff_user_id
        success
        gstin
        restrict_checkout
        last_modified
        breakup_values {
          display {
            currency_code
            currency_symbol
            display
            key
            message
            value
          }
          loyalty_points {
            applicable
            description
            is_applied
            total
          }
          raw {
            cod_charge
            convenience_fee
            coupon
            delivery_charge
            discount
            fynd_cash
            gift_card
            gst_charges
            mrp_total
            subtotal
            total
            vog
            you_saved
            mop_total
          }
        }
        currency {
          code
          symbol
        }
        coupon_text
        buy_now
        pan_config
      }
    }`;
    let queryResponse = yield gqClient.mutate({
        mutation: gql `
        ${query}
      `,
    });
    if (address_pincode) {
        yield dispatch(fetchPincodeDetails({ pincode: address_pincode }));
    }
    return queryResponse.data;
}));
export const confirmPayment = createAsyncThunk("confirmPayment", (payload, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    const { gqClient } = extra;
    if (payload.payment_mode == "CARD") {
        //const res = await sdk.payment.getActiveCardAggregator();
        const query = `query ActiveCardAggregator {
        payment {
          activeCardAggregator {
            data {
              display_name
              items {
                id
                display_name
                logo_large
                logo_small
                name
              }
            }
          }
        }
      }`;
        const res = yield gqClient.query({
            query: gql `
          ${query}
        `,
        });
        if (res.data.success) {
            let cardPayload = {
                payment_mode: "CARD",
                aggregator_name: res.data.payment.activeCardAggregator.cards.aggregator,
            };
            return handleConfirmPayment(gqClient, Object.assign(Object.assign({}, payload), cardPayload));
        }
    }
    else if (payload) {
        return handleConfirmPayment(gqClient, Object.assign({}, payload));
    }
    else {
        rejectWithValue({ message: "Payment options are required" });
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
        builder
            // get payment options
            .addCase(fetchPaymentOptions.pending, (state) => {
            state.payment_options = {
                loading: true,
            };
        })
            .addCase(fetchPaymentOptions.fulfilled, (state, action) => {
            state.payment_options = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchPaymentOptions.rejected, (state, action) => {
            state.payment_options = Object.assign({}, { error: action.error, loading: false });
        })
            //aggregators config
            .addCase(fetchAggregatorsConfig.pending, (state) => {
            state.aggregators_config = {
                loading: true,
            };
        })
            .addCase(fetchAggregatorsConfig.fulfilled, (state, action) => {
            state.aggregators_config = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchAggregatorsConfig.rejected, (state, action) => {
            state.aggregators_config = Object.assign({}, { error: action.error, loading: false });
        });
    },
});
export const paymentReducer = paymentSlice.reducer;
export const { setPaymentModeRoutes, setaggregatorsConfig } = paymentSlice.actions;
//# sourceMappingURL=payment.js.map