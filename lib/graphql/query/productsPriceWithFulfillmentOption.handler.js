import { setproductPriceFO } from "../../store/slices/product";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function productsPriceWithFulfillmentOptionHandler(productPrice, dispatch, params, oldStore, options) {
    var _a, _b;
    dispatch(setproductPriceFO(Object.assign(Object.assign({}, productPrice), params)));
    if ((_a = productPrice === null || productPrice === void 0 ? void 0 : productPrice.items) === null || _a === void 0 ? void 0 : _a.length) {
        (_b = productPrice === null || productPrice === void 0 ? void 0 : productPrice.items) === null || _b === void 0 ? void 0 : _b.forEach((item) => {
            emitFPIEvent(FPI_EVENTS.PRODUCT_PRICE, params, item, oldStore, dispatch, options);
        });
    }
}
//# sourceMappingURL=productsPriceWithFulfillmentOption.handler.js.map