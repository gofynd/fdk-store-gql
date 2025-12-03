import { setaddItemsToCart } from "../../store/slices/cart";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function addItemsToCartHandler(addItemsToCart, dispatch, params, oldStore, options) {
    if (addItemsToCart) {
        conditionalStoreDispatch(dispatch, setaddItemsToCart, addItemsToCart, options);
        emitFPIEvent(FPI_EVENTS.ADD_TO_CART, params, addItemsToCart, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=addItemsToCart.handler.js.map