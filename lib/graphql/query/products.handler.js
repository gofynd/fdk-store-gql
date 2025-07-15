import { setProducts } from "../../store/slices/products";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { addSearchFyndQueryInAction, generateUniqueSearchKey } from "../../helpers/utils";
export function productsHandler(products, dispatch, params, oldStore, options) {
    if (products) {
        try {
            const searchId = generateUniqueSearchKey();
            if (products === null || products === void 0 ? void 0 : products.items) {
                products === null || products === void 0 ? void 0 : products.items.forEach((product, index) => {
                    if (params === null || params === void 0 ? void 0 : params.search) {
                        product.action = addSearchFyndQueryInAction(params.search, product.action, index, searchId);
                    }
                });
            }
        }
        catch (err) {
            console.log("Error setting product action: ", err);
        }
        dispatch(setProducts(products));
        emitFPIEvent(FPI_EVENTS.PRODUCT_LIST_VIEW, params, products, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=products.handler.js.map