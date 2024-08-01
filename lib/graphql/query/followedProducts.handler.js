import { setfollowedProducts } from "../../store/slices/product";
export function followedProductsHandler(followedProducts, dispatch) {
    if (followedProducts) {
        dispatch(setfollowedProducts(followedProducts));
    }
}
//# sourceMappingURL=followedProducts.handler.js.map