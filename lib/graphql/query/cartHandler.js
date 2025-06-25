import { setCart } from "../../store/slices/cart";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function cartHandler(cart, dispatch, params, oldStore, options) {
    var _a;
    if (cart) {
        dispatch(setCart(cart));
        if ((cart === null || cart === void 0 ? void 0 : cart.items) && ((_a = cart.items) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            emitFPIEvent(FPI_EVENTS.VIEW_CART, params, cart, oldStore, dispatch, options);
        }
    }
}
//# sourceMappingURL=cartHandler.js.map