import { setcompareSimilarProduct } from "../../store/slices/product";
export function compareSimilarProductHandler(compareSimilarProduct, dispatch) {
    if (compareSimilarProduct) {
        dispatch(setcompareSimilarProduct(compareSimilarProduct));
    }
}
//# sourceMappingURL=compareSimilarProduct.handler.js.map