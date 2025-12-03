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
export declare const CHECKOUT_CART = "mutation checkoutCart(\n  $buyNow: Boolean\n  $cartCheckoutDetailRequestInput: CartCheckoutDetailRequestInput\n  $cartType: String\n) {\n  checkoutCart(\n    buyNow: $buyNow\n    cartCheckoutDetailRequestInput: $cartCheckoutDetailRequestInput\n    cartType: $cartType\n  ) {\n    app_intercept_url\n    callback_url\n    cart {\n      buy_now\n      cart_id\n      checkout_mode\n      cod_available\n      cod_charges\n      cod_message\n      comment\n      coupon_text\n      delivery_charge_info\n      custom_cart_meta\n      delivery_charge_order_value\n      delivery_charges\n      error_message\n      gstin\n      id\n      is_valid\n      last_modified\n      message\n      order_id\n      restrict_checkout\n      store_code\n      store_emps\n      success\n      uid\n      user_type\n      breakup_values {\n        coupon {\n          code\n          coupon_type\n          coupon_value\n          description\n          is_applied\n          message\n          minimum_cart_value\n          sub_title\n          title\n          type\n          uid\n          value\n        }\n        display {\n          currency_code\n          currency_symbol\n          display\n          key\n          message\n          value\n          preset\n        }\n        loyalty_points {\n          applicable\n          description\n          is_applied\n          total\n        }\n        raw {\n          cod_charge\n          convenience_fee\n          coupon\n          delivery_charge\n          discount\n          fynd_cash\n          gift_card\n          gst_charges\n          mop_total\n          mrp_total\n          subtotal\n          total\n          vog\n          you_saved\n          total_charge\n        }\n      }\n    }\n    data\n    message\n    order_id\n    payment_confirm_url\n    success\n  }\n}\n";
export declare const validateSliceUpdate: (state: any, sliceName: string) => boolean;
/**
 * Conditionally dispatches a store update action based on skipStoreUpdate option
 * @param dispatch - The Redux dispatch function
 * @param action - The action creator function
 * @param payload - The payload to pass to the action creator
 * @param options - Options object that may contain skipStoreUpdate flag
 */
export declare function conditionalStoreDispatch(dispatch: any, action: any, payload: any, options?: any): void;
