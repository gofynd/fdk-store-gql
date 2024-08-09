export const PENDING_ACTION_TYPE = 'PENDING';
export const ERROR_ACTION_TYPE = 'ERROR';
export const FULFILLED_ACTION_TYPE = 'FULFILLED';
export function createLoadingAction() {
    return {
        type: PENDING_ACTION_TYPE,
    };
}
export function createErrorAction() {
    return {
        type: ERROR_ACTION_TYPE,
    };
}
export function createPayloadAction(payload) {
    return {
        type: FULFILLED_ACTION_TYPE,
        payload,
    };
}
export const CHECKOUT_CART = `mutation CheckoutCart($cartCheckoutDetailRequestInput: CartCheckoutDetailRequestInput) {
  checkoutCart(cartCheckoutDetailRequestInput: $cartCheckoutDetailRequestInput)  {
    app_intercept_url
    callback_url
    data
    message
    order_id
    payment_confirm_url
    success
    cart {
      buy_now
      cart_id
      checkout_mode
      cod_available
      cod_charges
      cod_message
      comment
      coupon_text
      delivery_charge_info
      delivery_charge_order_value
      delivery_charges
      error_message
      gstin
      id
      is_valid
      last_modified
      message
      order_id
      restrict_checkout
      store_code
      store_emps
      success
      uid
      user_type
      breakup_values {
        coupon {
          code
          coupon_type
          coupon_value
          description
          is_applied
          message
          minimum_cart_value
          sub_title
          title
          type
          uid
          value
        }
        display {
          currency_code
          currency_symbol
          display
          key
          message
          value
          preset
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
          promotion
          coupon
          delivery_charge
          discount
          fynd_cash
          gift_card
          gst_charges
          mop_total
          mrp_total
          subtotal
          total
          vog
          you_saved
          total_charge
        }
      }
      currency {
        code
        symbol
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
        iso {
          max
          min
        }
      }
      items {
        bulk_offer
        coupon_message
        custom_order
        discount
        is_set
        key
        message
        moq
        parent_item_identifiers
        product_ean_id
        quantity
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
          product_group_tags
          quantity
          seller_identifier
          size
          tags
          type
          uid
          price {
            base {
              currency_code
              currency_symbol
              effective
              marked
              selling
            }
            converted {
              currency_code
              currency_symbol
              effective
              marked
              selling
            }
          }
          seller {
            name
            uid
          }
          store {
            name
            store_code
            uid
            code
          }
        }
        availability {
          deliverable
          is_valid
          other_store_quantity
          out_of_stock
          sizes
        }
        coupon {
          code
          discount_single_quantity
          discount_total_quantity
        }
        charges {
          meta
          name
          allow_refund
          code
          type
          amount {
            currency
            value
          }
        }
        identifiers {
          identifier
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
          iso {
            max
            min
          }
        }
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
            selling_price
          }
          converted {
            add_on
            currency_code
            currency_symbol
            effective
            marked
            selling_price
          }
        }
        product {
          _custom_json
          attributes
          item_code
          name
          slug
          tags
          type
          uid
          action {
            type
            url
            query {
              product_slug
            }
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
          teaser_tag {
            tags
            tag
          }
        }
        promo_meta {
          message
        }
      }
    }
  }
}`;
//# sourceMappingURL=util.js.map