import { setcoupons } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function couponsHandler(coupons, dispatch, options) {
    if (coupons) {
        conditionalStoreDispatch(dispatch, setcoupons, coupons, options);
    }
}
//# sourceMappingURL=coupons.handler.js.map