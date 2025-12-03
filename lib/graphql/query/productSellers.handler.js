import { setproductSellers } from "../../store/slices/product";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function productSellersHandler(productSellers, dispatch, options) {
    if (productSellers) {
        conditionalStoreDispatch(dispatch, setproductSellers, productSellers, options);
    }
}
//# sourceMappingURL=productSellers.handler.js.map