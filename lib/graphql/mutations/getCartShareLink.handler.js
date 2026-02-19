import { setgetCartShareLink } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function getCartShareLinkHandler(getCartShareLink, dispatch, params, oldStore, options) {
    if (getCartShareLink) {
        conditionalStoreDispatch(dispatch, setgetCartShareLink, getCartShareLink, options);
        emitFPIEvent(FPI_EVENTS.CART_SHARE, params, getCartShareLink, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=getCartShareLink.handler.js.map