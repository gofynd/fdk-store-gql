export const PENDING_ACTION_TYPE = "PENDING";
export const ERROR_ACTION_TYPE = "ERROR";
export const FULFILLED_ACTION_TYPE = "FULFILLED";
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
export function isDeeplyDifferent(current, previous) {
    if (current === previous) {
        return false;
    }
    if (typeof current !== 'object' || typeof previous !== 'object' || current == null || previous == null) {
        return true;
    }
    const keysCurrent = Object.keys(current);
    const keysPrevious = Object.keys(previous);
    if (keysCurrent.length !== keysPrevious.length) {
        return true;
    }
    for (let key of keysCurrent) {
        if (!keysPrevious.includes(key)) {
            return true;
        }
        if (typeof current[key] === 'object' && typeof previous[key] === 'object') {
            if (isDeeplyDifferent(current[key], previous[key])) {
                return true;
            }
        }
        else if (current[key] !== previous[key]) {
            return true;
        }
    }
    return false;
}
;
export const CHECKOUT_CART = `mutation checkoutCart(
  $buyNow: Boolean
  $cartCheckoutDetailRequestInput: CartCheckoutDetailRequestInput
  $cartType: String
) {
  checkoutCart(
    buyNow: $buyNow
    cartCheckoutDetailRequestInput: $cartCheckoutDetailRequestInput
    cartType: $cartType
  ) {
    app_intercept_url
    callback_url
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
      custom_cart_meta
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
    }
    data
    message
    order_id
    payment_confirm_url
    success
  }
}
`;
//# sourceMappingURL=util.js.map