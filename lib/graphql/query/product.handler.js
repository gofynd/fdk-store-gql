import { setProduct, setProductVariants } from "../../store/slices/product";
export function productHandler(product, dispatch) {
    if (product) {
        dispatch(setProduct(product));
    }
    if (product.variants) {
        dispatch(setProductVariants(product.variants));
    }
}
//# sourceMappingURL=product.handler.js.map