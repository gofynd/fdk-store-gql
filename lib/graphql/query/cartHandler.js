import { setCart } from "../../store/slices/cart";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function cartHandler(cart, dispatch, params, oldStore) {
    if (cart) {
        dispatch(setCart(cart));
        emitFPIEvent(FPI_EVENTS.VIEW_CART, params, cart, oldStore, dispatch);
    }
}
//# sourceMappingURL=cartHandler.js.map