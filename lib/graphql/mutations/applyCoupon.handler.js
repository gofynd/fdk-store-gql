import { setapplyCoupon } from "../../store/slices/cart";
export function applyCouponHandler(applyCoupon, dispatch) {
    if (applyCoupon) {
        dispatch(setapplyCoupon(applyCoupon));
    }
}
//# sourceMappingURL=applyCoupon.handler.js.map