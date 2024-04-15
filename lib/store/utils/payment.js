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
import { removeCookie } from "../../helpers/utils";
import { COOKIE_KEYS } from "../enums/keys";
import { PaymentGatway } from "./gateways";
import { gql } from "@apollo/client";
export function handleConfirmPayment(gqClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { is_redirection, queryParams } = params, options = __rest(params, ["is_redirection", "queryParams"]);
        let queryOptions = {
            id: queryParams.cart_id,
            addressId: queryParams.address_id,
            aggregatorName: options.aggregator_name,
            paymentIdentifier: options.payment_identifier,
            paymentMode: options.payment_mode,
        };
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
        const data = yield gqClient.query({
            query: gql `
      ${query}
    `,
        });
        //const data = await sdk.cart.validateCouponForPayment(queryOptions);
        const coupon_validity = data === null || data === void 0 ? void 0 : data.coupon_validity;
        if (options.disable_coupon_validation ||
            (coupon_validity && coupon_validity.valid)) {
            let { card_reference } = options, body = __rest(options, ["card_reference"]);
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
            const res = yield gqClient.mutate({
                mutation: gql `
        ${paymentOptionsQuery}
      `,
            });
            // const res = await sdk.cart.selectPaymentMode({
            //   body,
            //   id: body.id,
            // });
            return res;
        }
        else {
            throw data;
        }
    });
}
export function handleCODOrder(gqClient, state, paymentOptions, create_order = createOrder) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderInfo = yield create_order(gqClient, paymentOptions);
        if (orderInfo.success) {
            // Reset ordering store in case of successful checkout
            removeCookie(COOKIE_KEYS.ORDERING_STORE);
            //navigate to order status
            const CODParams = {
                success: "true",
                delivery_address_id: paymentOptions.address_id,
                order_id: orderInfo.order_id,
                uid: paymentOptions.uid,
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
            const currentURL = orderInfo.callback_url;
            const finalUrl = `${currentURL}?${params.toString()}`;
            window.location.href = finalUrl || "";
        }
        else {
            const params = new URLSearchParams();
            params.append("success", "false");
            const currentURL = orderInfo.callback_url;
            const finalUrl = `${currentURL}?${params.toString()}`;
            window.location.href = finalUrl || "";
        }
    });
}
export function transactOrder(gqClient, state, paymentOptions, create_order = createOrder) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        //Figure out current payment gateway
        let currentPaymentGatway = PaymentGatway[paymentOptions.aggregator];
        currentPaymentGatway = new currentPaymentGatway(paymentOptions.payment, state);
        let orderInfo = yield create_order(gqClient, paymentOptions);
        if (orderInfo.success) {
            // Reset ordering store in case of successful checkout
            removeCookie(COOKIE_KEYS.ORDERING_STORE);
            //get updated order info
            orderInfo = updateOrderInfo(currentPaymentGatway, orderInfo, paymentOptions);
            let orderInfoPayload = orderInfo.data;
            const isLoggedIn = state.auth.is_logged_in;
            let rbiGuidelineSave = Object.assign(Object.assign({}, (isLoggedIn
                ? {
                    checkedBoxValue: (_a = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _a === void 0 ? void 0 : _a.is_card_secure,
                }
                : { checkedBoxValue: false })), { paymentdata: Object.assign(Object.assign({}, paymentOptions), { option: {
                        card_number: ((_b = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _b === void 0 ? void 0 : _b.card_token)
                            ? ""
                            : (_c = paymentOptions === null || paymentOptions === void 0 ? void 0 : paymentOptions.payment) === null || _c === void 0 ? void 0 : _c.card_number,
                    } }) });
            if (orderInfoPayload === null || orderInfoPayload === void 0 ? void 0 : orderInfoPayload.card_token) {
                orderInfoPayload === null || orderInfoPayload === void 0 ? true : delete orderInfoPayload.card_token;
            }
            const res = yield currentPaymentGatway.transaction(orderInfoPayload, rbiGuidelineSave);
            // if (paymentOptions.aggregator === 'Simpl') {
            //     //navigate to order status
            //     // return this.$router.push({
            //     //     path: '/cart/order-status',
            //     //     query: {
            //     //         delivery_address_id: res.address_id,
            //     //         order_id: res.order_id,
            //     //         uid: res.uid,
            //     //         billing_address_id: res.address_id,
            //     //         success: res.success,
            //     //     },
            //     // });
            // } else if (paymentOptions.aggregator === 'UPI_Razorpay') {
            //     // this.$router.push({
            //     //     name: 'cart-upi',
            //     //     params: {
            //     //         s2sData: res,
            //     //     },
            //     // });
            // }
        }
        else {
            throw orderInfo;
        }
    });
}
export function createOrder(gqClient, paymentOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        let options = Object.assign(Object.assign({ address_id: paymentOptions.address_id, billing_address_id: paymentOptions.billing_address_id, aggregator: paymentOptions.aggregator, merchant_code: paymentOptions.merchant_code, payment_mode: paymentOptions.payment_mode, meta: paymentOptions.meta }, (paymentOptions.id ? { id: paymentOptions.id } : {})), (paymentOptions.custom_meta
            ? { custom_meta: paymentOptions.custom_meta }
            : {}));
        if (paymentOptions.payment_identifier) {
            options = Object.assign(Object.assign({}, options), { payment_identifier: paymentOptions.payment_identifier });
        }
        if (paymentOptions.staff) {
            options = Object.assign(Object.assign({}, options), { staff: paymentOptions.staff });
        }
        if (paymentOptions.ordering_store) {
            options = Object.assign(Object.assign({}, options), { ordering_store: paymentOptions.ordering_store });
        }
        let query = `mutation CheckoutCart {
        checkoutCart(cartCheckoutDetailRequestInput: { address_id : "${options.address_id}",
        billing_address_id : "${options.billing_address_id}",
        aggregator : "${options.aggregator}",
        merchant_code : "${options.merchant_code}",
        payment_mode : "${options.payment_mode}",
        meta : "${options.meta}",
        id : "${paymentOptions.id ? { id: paymentOptions.id } : {}}",
        custom_meta : "${paymentOptions.custom_meta
            ? { custom_meta: paymentOptions.custom_meta }
            : {}}",
        payment_identifier : "${paymentOptions.payment_identifier}",
            ordering_store : "${paymentOptions.ordering_store}",
            staff : "${paymentOptions.staff}"
    }) {
          app_intercept_url
          callback_url
          cart {
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
            cart_id
            checkout_mode
            cod_available
            cod_charges
            cod_message
            comment
            coupon_text
            currency {
              code
              symbol
            }
            delivery_charge_info
            delivery_charge_order_value
            delivery_charges
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
            error_message
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
              quantity
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
            }
            last_modified
            message
            order_id
            payment_selection_lock {
              default_options
              enabled
              payment_identifier
            }
            restrict_checkout
            store_code
            store_emps
            success
            uid
            user_type
          }
          data
          message
          order_id
          payment_confirm_url
          success
          
        }
      }`;
        let queryResponse = yield gqClient.mutate({
            mutation: gql `
      ${query}
    `,
        });
        // return sdk.cart.checkoutCart({
        //     body: options,
        // });
        return queryResponse;
    });
}
export function updateOrderInfo(currentPaymentGatway, orderInfo, paymentOptions) {
    //update orderInfo with card and upi data
    if (paymentOptions.payment_mode === "UPI") {
        const upiMeta = currentPaymentGatway.createUPIPaymentData({
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
        const cardMeta = currentPaymentGatway.createCardPaymentData(infoCard);
        Object.assign(orderInfo.data, cardMeta);
    }
    else if (paymentOptions.payment_mode === "CARD" &&
        paymentOptions.payment.card_reference) {
        const cardMeta = currentPaymentGatway.createCardPaymentData(paymentOptions.payment);
        Object.assign(orderInfo.data, cardMeta);
    }
    return orderInfo;
}
//# sourceMappingURL=payment.js.map