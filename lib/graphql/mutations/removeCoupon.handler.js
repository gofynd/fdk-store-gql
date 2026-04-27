import { setremoveCoupon, } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function removeCouponHandler(removeCoupon, dispatch, options) {
    if (removeCoupon) {
        conditionalStoreDispatch(dispatch, setremoveCoupon, removeCoupon, options);
    }
}
//# sourceMappingURL=removeCoupon.handler.js.map