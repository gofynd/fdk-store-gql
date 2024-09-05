import { setUpdateCartMeta } from "../../store/slices/cart";
export function updateCartMetaHandler(updateCartMeta, dispatch) {
    if (updateCartMeta) {
        dispatch(setUpdateCartMeta(updateCartMeta));
    }
}
//# sourceMappingURL=updateCartMeta.handler.js.map