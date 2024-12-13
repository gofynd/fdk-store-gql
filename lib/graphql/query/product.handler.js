import { setProduct, setProductVariants } from "../../store/slices/product";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function productHandler(product, dispatch, params, oldStore) {
    if (product) {
        dispatch(setProduct(product));
        emitFPIEvent(FPI_EVENTS.PRODUCT_DETAIL_PAGE_VIEW, params, product, oldStore);
    }
    if (product.variants) {
        dispatch(setProductVariants(product.variants));
    }
}
//# sourceMappingURL=product.handler.js.map