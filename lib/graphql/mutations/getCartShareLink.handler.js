import { setgetCartShareLink } from "../../store/slices/cart";
export function getCartShareLinkHandler(getCartShareLink, dispatch) {
    if (getCartShareLink) {
        dispatch(setgetCartShareLink(getCartShareLink));
    }
}
//# sourceMappingURL=getCartShareLink.handler.js.map