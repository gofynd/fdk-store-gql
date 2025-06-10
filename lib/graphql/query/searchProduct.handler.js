import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function searchHandler(searchProduct, dispatch, params, oldStore, options) {
    if (searchProduct) {
        emitFPIEvent(FPI_EVENTS.SEARCH_PRODUCTS, params, searchProduct, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=searchProduct.handler.js.map