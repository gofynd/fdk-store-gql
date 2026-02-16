import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { generateUniqueSearchKey, addMarketingParamsInAction } from "../../helpers/utils";
export function searchHandler(searchProduct, dispatch, params, oldStore, options) {
    if (searchProduct) {
        let searchId;
        try {
            searchId = generateUniqueSearchKey();
            if (searchProduct === null || searchProduct === void 0 ? void 0 : searchProduct.items) {
                searchProduct.items.forEach((item, index) => {
                    if (item) {
                        item.action = addMarketingParamsInAction(item.action, Object.assign({ f_id: searchId, f_source: 'search', f_term: params.query, f_content: `${index + 1}` }, (item.type ? { f_medium: item.type } : {})));
                    }
                });
            }
        }
        catch (err) {
            console.error("Error setting search product marketing params: ", err);
        }
        const eventParams = Object.assign(Object.assign({}, params), (searchId ? { search_id: searchId } : {}));
        emitFPIEvent(FPI_EVENTS.SEARCH_PRODUCTS, eventParams, searchProduct, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=searchProduct.handler.js.map