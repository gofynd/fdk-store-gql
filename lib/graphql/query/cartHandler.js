import { setCart } from "../../store/slices/cart";
const themeMap = {};
export function cartHandler(cart, dispatch) {
    if (cart) {
        dispatch(setCart(cart));
    }
}
//# sourceMappingURL=cartHandler.js.map