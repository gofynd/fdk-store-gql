import { setcoupons } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function couponsHandler(coupons, dispatch, params, oldStore, options) {
    if (coupons) {
        conditionalStoreDispatch(dispatch, setcoupons, coupons, options);
        emitFPIEvent(FPI_EVENTS.COUPONS_VIEW, params, coupons, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=coupons.handler.js.map