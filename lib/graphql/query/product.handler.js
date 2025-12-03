import { setProduct, setProductVariants } from "../../store/slices/product";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function productHandler(product, dispatch, params, oldStore, options) {
    if (product) {
        conditionalStoreDispatch(dispatch, setProduct, product, options);
        emitFPIEvent(FPI_EVENTS.PRODUCT_DETAIL_PAGE_VIEW, params, product, oldStore, dispatch, options);
    }
    if (product.variants) {
        conditionalStoreDispatch(dispatch, setProductVariants, product.variants, options);
    }
}
//# sourceMappingURL=product.handler.js.map