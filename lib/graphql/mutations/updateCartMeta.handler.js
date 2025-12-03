import { setUpdateCartMeta } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function updateCartMetaHandler(updateCartMeta, dispatch, options) {
    if (updateCartMeta) {
        conditionalStoreDispatch(dispatch, setUpdateCartMeta, updateCartMeta, options);
    }
}
//# sourceMappingURL=updateCartMeta.handler.js.map