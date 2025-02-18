var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { removeCookie } from "../../helpers/utils";
import { CHECKOUT_CART } from "./util";
export function handleConfirmPayment(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { is_redirection, queryParams } = params, options = __rest(params, ["is_redirection", "queryParams"]);
        const query = `query ValidateCoupon{
    validateCoupon(addressId: "${queryParams.address_id}",
    aggregatorName: "${options.aggregator_name}",
    id: "${queryParams.cart_id}",
    paymentMode: "${options.payment_mode}",
    paymentIdentifier: "${options.payment_identifier}") {
      coupon_validity {
        code
        discount
        display_message_en
        next_validation_required
        title
        valid
      }
      message
      success
    }
  }`;
        const data = yield window.fpi.executeGQL(query);
        //const data = await sdk.cart.validateCouponForPayment(queryOptions);
        const coupon_validity = data === null || data === void 0 ? void 0 : data.coupon_validity;
        if (options.disable_coupon_validation ||
            (coupon_validity && coupon_validity.valid)) {
            let { card_reference } = options, body = __rest(options, ["card_reference"]);
            let param = {
                updateCartPaymentRequestInput: {
                    aggregator_name: options.aggregator_name,
                    payment_mode: options.payment_mode,
                    id: queryParams.cart_id,
                },
            };
            const paymentOptionsQuery = `mutation SelectPaymentMode {
        selectPaymentMode(id: "${queryParams.cart_id}",
             updateCartPaymentRequestInput: {
                address_id : "${queryParams.address_id}",
                aggregator_name :  "${options.aggregator_name}",
                id : "${queryParams.cart_id}",
                payment_mode : "${options.payment_mode}"
        }) {
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
          breakup_values {
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
          buy_now
          checkout_mode
          comment
          coupon_text
          currency {
            code
            symbol
          }
          delivery_charge_info
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
          gstin
          id
          is_valid
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
          last_modified
          message
          pan_config
          pan_no
          payment_selection_lock {
            default_options
            enabled
            payment_identifier
          }
          restrict_checkout
        }
      }`;
            const res = yield window.fpi.executeGQL(`
        ${paymentOptionsQuery}
      `);
            emitFPIEvent(FPI_EVENTS.ADD_PAYMENT_INFORMATION, param, res, "");
            return res;
        }
        else {
            throw data;
        }
    });
}
function getCurrentPaymentGateway(paymentOptions) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (!window.currentPaymentGateway) {
            window.currentPaymentGateway = {};
        }
        if (window.currentPaymentGateway[paymentOptions.aggregator]) {
            return window.currentPaymentGateway[paymentOptions.aggregator];
        }
        let currentPaymentGateway = null;
        if (((_b = (_a = paymentOptions.payment) === null || _a === void 0 ? void 0 : _a.paymentFlowMeta) === null || _b === void 0 ? void 0 : _b.type) == "standard_extension") {
            currentPaymentGateway = window.fpi.PaymentGateways["StandardExtension"];
        }
        else {
            const { PaymentGateways } = window.fpi;
            currentPaymentGateway = PaymentGateways[paymentOptions.aggregator];
        }
        currentPaymentGateway = new currentPaymentGateway(paymentOptions.payment, window.fpi.store.getState());
        if (currentPaymentGateway.injectScript) {
            yield currentPaymentGateway.injectScript();
        }
        window.currentPaymentGateway[paymentOptions.aggregator] =
            currentPaymentGateway;
        return currentPaymentGateway;
    });
}
export function getUpiIntentApps(paymentOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPaymentGateway = yield getCurrentPaymentGateway(paymentOptions);
        const res = yield currentPaymentGateway.getSupportedUpiIntentApps();
        console.log("Response from razorpay: ", res);
        return res;
    });
}
export function verifyCardDetails(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPaymentGateway = yield getCurrentPaymentGateway(payload);
        yield currentPaymentGateway.validateCardDetails(payload.inputType, payload.options, payload.callback);
    });
}
export function handleCODOrder(paymentOptions) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        const orderInfo = yield createOrder(paymentOptions);
        if ((_b = (_a = orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.data) === null || _a === void 0 ? void 0 : _a.checkoutCart) === null || _b === void 0 ? void 0 : _b.success) {
            // Reset ordering store in case of successful checkout
            removeCookie("m_orderingStore");
            //navigate to order status
            const CODParams = {
                success: "true",
                delivery_address_id: paymentOptions.address_id,
                order_id: (_d = (_c = orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.data) === null || _c === void 0 ? void 0 : _c.checkoutCart) === null || _d === void 0 ? void 0 : _d.order_id,
                billing_address_id: paymentOptions.billing_address_id,
            };
            if (paymentOptions.id) {
                CODParams["cart_id"] = paymentOptions.id;
            }
            const params = new URLSearchParams();
            for (const key in CODParams) {
                if (CODParams.hasOwnProperty(key)) {
                    params.append(key, CODParams[key]);
                }
            }
            const currentURL = (_f = (_e = orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.data) === null || _e === void 0 ? void 0 : _e.checkoutCart) === null || _f === void 0 ? void 0 : _f.callback_url;
            const finalUrl = `${currentURL}?${params.toString()}`;
            window.location.href = finalUrl || "";
        }
        else {
            const params = new URLSearchParams();
            const currentURL = ((_g = window === null || window === void 0 ? void 0 : window.location) === null || _g === void 0 ? void 0 : _g.origin) + "/cart/order-status/";
            params.append("success", "false");
            const finalUrl = `${currentURL}?${params.toString()}`;
            window.location.href = finalUrl;
        }
    });
}
export function handleQrOrder(paymentOptions) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const orderInfo = yield createOrder(paymentOptions);
        if ((_b = (_a = orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.data) === null || _a === void 0 ? void 0 : _a.checkoutCart) === null || _b === void 0 ? void 0 : _b.success) {
            // Reset ordering store in case of successful checkout
            removeCookie("m_orderingStore");
            return orderInfo;
        }
        else {
            throw orderInfo;
        }
    });
}
export function transactOrder(paymentOptions, state) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        const currentPaymentGateway = yield getCurrentPaymentGateway(paymentOptions);
        let orderInfo = yield createOrder(paymentOptions);
        if ((_b = (_a = orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.data) === null || _a === void 0 ? void 0 : _a.checkoutCart) === null || _b === void 0 ? void 0 : _b.success) {
            // Reset ordering store in case of successful checkout
            removeCookie("m_orderingStore");
            //get updated order info
            orderInfo = updateOrderInfo(currentPaymentGateway, (_c = orderInfo.data) === null || _c === void 0 ? void 0 : _c.checkoutCart, paymentOptions);
            let orderInfoPayload = orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.data;
            const isLoggedIn = state.auth.logged_in;
            let rbiGuidelineSave = Object.assign(Object.assign({}, (isLoggedIn
                ? {
                    checkedBoxValue: (_d = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _d === void 0 ? void 0 : _d.is_card_secure,
                }
                : { checkedBoxValue: false })), { paymentdata: Object.assign(Object.assign({}, paymentOptions), { option: {
                        card_number: ((_e = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _e === void 0 ? void 0 : _e.card_token)
                            ? (_f = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _f === void 0 ? void 0 : _f.card_number
                            : "",
                    } }) });
            if (orderInfoPayload === null || orderInfoPayload === void 0 ? void 0 : orderInfoPayload.card_token) {
                orderInfoPayload === null || orderInfoPayload === void 0 ? true : delete orderInfoPayload.card_token;
            }
            orderInfoPayload.upi_app = paymentOptions.upi_app;
            const res = yield currentPaymentGateway.transaction(orderInfoPayload, rbiGuidelineSave);
        }
        else {
            throw orderInfo;
        }
    });
}
function createOrder(paymentOptions) {
    let options = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ address_id: paymentOptions.address_id, billing_address_id: paymentOptions.billing_address_id, aggregator: paymentOptions.aggregator, merchant_code: paymentOptions.merchant_code, payment_mode: paymentOptions.payment_mode, callback_url: paymentOptions.callback_url, meta: paymentOptions.meta, payment_methods: [
            Object.assign({ mode: paymentOptions.payment_mode, name: paymentOptions.payment_mode, payment: "required", payment_meta: {
                    merchant_code: paymentOptions.merchant_code,
                    payment_gateway: paymentOptions.aggregator,
                    payment_identifier: paymentOptions.payment_identifier,
                } }, (paymentOptions.payment_extra_identifiers
                ? {
                    payment_extra_identifiers: paymentOptions.payment_extra_identifiers,
                }
                : {})),
        ] }, (paymentOptions.id ? { id: paymentOptions.id } : {})), (paymentOptions.custom_meta
        ? { custom_meta: paymentOptions.custom_meta }
        : {})), (paymentOptions.order_type
        ? { order_type: paymentOptions.order_type }
        : {})), (paymentOptions.iin ? { iin: paymentOptions.iin } : {})), (paymentOptions.network ? { network: paymentOptions.network } : {})), (paymentOptions.type ? { type: paymentOptions.type } : {})), (paymentOptions.card_id ? { card_id: paymentOptions.card_id } : {})), (paymentOptions.staff ? { staff: paymentOptions.staff } : {})), (paymentOptions.ordering_store
        ? { ordering_store: paymentOptions.ordering_store }
        : {}));
    if ((paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment_mode) !== "CARD" &&
        (paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment_identifier))
        options.payment_identifier = paymentOptions.payment_identifier;
    const buyNow = paymentOptions.buy_now;
    return window.fpi.executeGQL(CHECKOUT_CART, Object.assign({ cartCheckoutDetailRequestInput: options }, (buyNow && { buyNow } || {}))).then((response) => {
        emitFPIEvent(FPI_EVENTS.ORDER_CHECKEDOUT, {}, response, {});
        return response;
    });
}
export function updateOrderInfo(currentPaymentGateway, orderInfo, paymentOptions) {
    //update orderInfo with card and upi data
    if (paymentOptions.payment_mode === "UPI" &&
        currentPaymentGateway.createUPIPaymentData) {
        const upiMeta = currentPaymentGateway.createUPIPaymentData({
            vpa: paymentOptions.payment.upi.vpa,
        });
        Object.assign(orderInfo.data, upiMeta);
    }
    else if (paymentOptions.payment_mode === "CARD" &&
        !paymentOptions.payment.card_token) {
        let infoCard = {
            card_security_code: paymentOptions.payment.cvv,
            card_number: paymentOptions.payment.card_number,
            card_exp_month: paymentOptions.payment.exp_month,
            card_exp_year: paymentOptions.payment.exp_year,
            name_on_card: paymentOptions.payment.name,
        };
        const cardMeta = currentPaymentGateway.createCardPaymentData(infoCard);
        Object.assign(orderInfo.data, cardMeta);
    }
    else if (paymentOptions.payment_mode === "CARD" &&
        paymentOptions.payment.card_token) {
        const cardMeta = currentPaymentGateway.createCardPaymentData(paymentOptions.payment);
        Object.assign(orderInfo.data, cardMeta);
    }
    return orderInfo;
}
export function handleUpiOrder(paymentOptions) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const orderInfo = yield createOrder(paymentOptions);
        if ((_b = (_a = orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.data) === null || _a === void 0 ? void 0 : _a.checkoutCart) === null || _b === void 0 ? void 0 : _b.success) {
            removeCookie("m_orderingStore");
            return orderInfo;
        }
        else {
            throw orderInfo;
        }
    });
}
//# sourceMappingURL=payment.js.map