import { setUpdateCart } from "../../store/slices/cart";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function updateCartHandler(updateCart, dispatch, params, oldStore, options) {
    if (updateCart.cart) {
        dispatch(setUpdateCart(updateCart.cart));
        if (params.updateCartRequestInput.operation === "update_item") {
            emitFPIEvent(FPI_EVENTS.UPDATE_CART, params, updateCart, oldStore, dispatch, options);
        }
        else {
            emitFPIEvent(FPI_EVENTS.REMOVE_FROM_CART, params, updateCart, oldStore, dispatch, options);
        }
    }
}
//# sourceMappingURL=updateCart.handler.js.map