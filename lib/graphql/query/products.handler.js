import { setProducts } from "../../store/slices/products";
export function productsHandler(products, dispatch) {
    if (products) {
        dispatch(setProducts(products));
    }
}
//# sourceMappingURL=products.handler.js.map