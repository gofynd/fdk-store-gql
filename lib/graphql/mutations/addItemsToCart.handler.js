import { setaddItemsToCart } from "../../store/slices/cart";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function addItemsToCartHandler(addItemsToCart, dispatch, params, oldStore, options) {
    if (addItemsToCart) {
        dispatch(setaddItemsToCart(addItemsToCart));
        emitFPIEvent(FPI_EVENTS.ADD_TO_CART, params, addItemsToCart, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=addItemsToCart.handler.js.map