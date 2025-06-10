import { setproductPrice } from "../../store/slices/product";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function productPriceHandler(productPrice, dispatch, params, oldStore, options, error) {
    dispatch(setproductPrice(Object.assign(Object.assign({}, productPrice), params)));
    let emitObj = productPrice;
    if (!productPrice) {
        emitObj = error;
    }
    emitFPIEvent(FPI_EVENTS.PRODUCT_PRICE, params, emitObj, oldStore, dispatch, options);
}
//# sourceMappingURL=productPrice.handler.js.map