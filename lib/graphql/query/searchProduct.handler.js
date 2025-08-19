import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { addSearchFyndQueryInAction, generateUniqueSearchKey } from "../../helpers/utils";
export function searchHandler(searchProduct, dispatch, params, oldStore, options) {
    if (searchProduct) {
        try {
            const searchId = generateUniqueSearchKey();
            if (searchProduct === null || searchProduct === void 0 ? void 0 : searchProduct.items) {
                searchProduct.items.forEach((item, index) => {
                    if (item && (params === null || params === void 0 ? void 0 : params.query)) {
                        item.action = addSearchFyndQueryInAction(params.query, item.action, index, searchId);
                    }
                });
            }
        }
        catch (err) {
            console.log("Error setting search product action: ", err);
        }
        emitFPIEvent(FPI_EVENTS.SEARCH_PRODUCTS, params, searchProduct, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=searchProduct.handler.js.map