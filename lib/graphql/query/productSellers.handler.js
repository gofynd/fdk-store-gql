import { setproductSellers } from "../../store/slices/product";
export function productSellersHandler(productSellers, dispatch) {
    if (productSellers) {
        dispatch(setproductSellers(productSellers));
    }
}
//# sourceMappingURL=productSellers.handler.js.map