import { setaddItemsToCart } from "../../store/slices/cart";
export function addItemsToCartHandler(addItemsToCart, dispatch) {
    if (addItemsToCart) {
        dispatch(setaddItemsToCart(addItemsToCart));
    }
}
//# sourceMappingURL=addItemsToCart.handler.js.map