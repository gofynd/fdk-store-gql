import { setproductPrice } from "../../store/slices/product";
export function productPriceHandler(productPrice, dispatch, params) {
    dispatch(setproductPrice(Object.assign(Object.assign({}, productPrice), params)));
}
//# sourceMappingURL=productPrice.handler.js.map