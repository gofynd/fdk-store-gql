import { setproductPrice } from "../../store/slices/product";
export function productPriceHandler(productPrice, dispatch) {
    if (productPrice) {
        dispatch(setproductPrice(productPrice));
    }
}
//# sourceMappingURL=productPrice.handler.js.map