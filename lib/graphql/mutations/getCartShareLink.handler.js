import { setgetCartShareLink } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function getCartShareLinkHandler(getCartShareLink, dispatch, options) {
    if (getCartShareLink) {
        conditionalStoreDispatch(dispatch, setgetCartShareLink, getCartShareLink, options);
    }
}
//# sourceMappingURL=getCartShareLink.handler.js.map