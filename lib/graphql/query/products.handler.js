import { setProducts } from "../../store/slices/products";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function productsHandler(products, dispatch, params, oldStore) {
    if (products) {
        dispatch(setProducts(products));
        emitFPIEvent(FPI_EVENTS.PRODUCT_LIST_VIEW, params, products, oldStore, dispatch);
    }
}
//# sourceMappingURL=products.handler.js.map