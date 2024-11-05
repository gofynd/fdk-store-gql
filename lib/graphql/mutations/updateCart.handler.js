import { setUpdateCart } from "../../store/slices/cart";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function updateCartHandler(updateCart, dispatch, params, oldStore) {
    if (updateCart.cart) {
        if (params.updateCartRequestInput.operation === "update_item") {
            emitFPIEvent(FPI_EVENTS.UPDATE_CART, params, updateCart, oldStore);
        }
        else {
            emitFPIEvent(FPI_EVENTS.REMOVE_FROM_CART, params, updateCart, oldStore);
        }
        dispatch(setUpdateCart(updateCart.cart));
    }
}
//# sourceMappingURL=updateCart.handler.js.map