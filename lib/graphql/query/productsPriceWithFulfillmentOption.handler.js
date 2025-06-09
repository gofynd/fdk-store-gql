import { setproductPriceFO } from "../../store/slices/product";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function productsPriceWithFulfillmentOptionHandler(productPrice, dispatch, params, oldStore, error) {
    dispatch(setproductPriceFO(Object.assign(Object.assign({}, productPrice), params)));
    let emitObj = productPrice;
    if (!productPrice) {
        emitObj = error;
    }
    emitFPIEvent(FPI_EVENTS.PRODUCT_PRICE, params, emitObj, oldStore, dispatch);
}
//# sourceMappingURL=productsPriceWithFulfillmentOption.handler.js.map