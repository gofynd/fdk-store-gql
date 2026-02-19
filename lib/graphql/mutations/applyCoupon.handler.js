import { setapplyCoupon, } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function applyCouponHandler(applyCoupon, dispatch, params, oldStore, options) {
    if (applyCoupon) {
        conditionalStoreDispatch(dispatch, setapplyCoupon, applyCoupon, options);
        emitFPIEvent(FPI_EVENTS.COUPON_APPLY, params, applyCoupon, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=applyCoupon.handler.js.map