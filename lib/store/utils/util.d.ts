export declare const PENDING_ACTION_TYPE = "PENDING";
export declare const ERROR_ACTION_TYPE = "ERROR";
export declare const FULFILLED_ACTION_TYPE = "FULFILLED";
export declare function createLoadingAction(): {
    type: string;
};
export declare function createErrorAction(): {
    type: string;
};
export declare function createPayloadAction<T>(payload: T): {
    type: string;
    payload: T;
};
export declare function isDeeplyDifferent(current: any, previous: any): boolean;
export declare const CHECKOUT_CART = "mutation checkoutCart(\n  $buyNow: Boolean\n  $cartCheckoutDetailRequestInput: CartCheckoutDetailRequestInput\n  $cartType: String\n) {\n  checkoutCart(\n    buyNow: $buyNow\n    cartCheckoutDetailRequestInput: $cartCheckoutDetailRequestInput\n    cartType: $cartType\n  ) {\n    app_intercept_url\n    callback_url\n    cart {\n      buy_now\n      cart_id\n      checkout_mode\n      cod_available\n      cod_charges\n      cod_message\n      comment\n      coupon_text\n      delivery_charge_info\n      custom_cart_meta\n      delivery_charge_order_value\n      delivery_charges\n      error_message\n      gstin\n      id\n      is_valid\n      last_modified\n      message\n      order_id\n      restrict_checkout\n      store_code\n      store_emps\n      success\n      uid\n      user_type\n    }\n    data\n    message\n    order_id\n    payment_confirm_url\n    success\n  }\n}\n";
