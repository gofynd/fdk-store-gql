import { setremoveCoupon, } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function removeCouponHandler(removeCoupon, dispatch, params, oldStore, options) {
    if (removeCoupon) {
        conditionalStoreDispatch(dispatch, setremoveCoupon, removeCoupon, options);
        emitFPIEvent(FPI_EVENTS.COUPON_REMOVE, params, removeCoupon, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=removeCoupon.handler.js.map