import { setapplyCoupon, } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function applyCouponHandler(applyCoupon, dispatch, options) {
    if (applyCoupon) {
        conditionalStoreDispatch(dispatch, setapplyCoupon, applyCoupon, options);
    }
}
//# sourceMappingURL=applyCoupon.handler.js.map