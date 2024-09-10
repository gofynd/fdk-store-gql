import { setUpdateCart } from "../../store/slices/cart";
export function updateCartHandler(updateCart, dispatch) {
    if (updateCart.cart) {
        dispatch(setUpdateCart(updateCart.cart));
    }
}
//# sourceMappingURL=updateCart.handler.js.map