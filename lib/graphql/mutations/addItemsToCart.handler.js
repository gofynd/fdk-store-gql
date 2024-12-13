import { setaddItemsToCart, } from "../../store/slices/cart";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function addItemsToCartHandler(addItemsToCart, dispatch, params, oldStore) {
    if (addItemsToCart) {
        dispatch(setaddItemsToCart(addItemsToCart));
        emitFPIEvent(FPI_EVENTS.ADD_TO_CART, params, addItemsToCart, oldStore);
    }
}
//# sourceMappingURL=addItemsToCart.handler.js.map