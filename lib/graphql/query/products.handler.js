import { setProducts } from "../../store/slices/products";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { generateUniqueSearchKey, addMarketingParamsInAction } from "../../helpers/utils";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function productsHandler(products, dispatch, params, oldStore, options) {
    if (products) {
        let searchId;
        try {
            if (params === null || params === void 0 ? void 0 : params.search) {
                searchId = generateUniqueSearchKey();
                if (products === null || products === void 0 ? void 0 : products.items) {
                    products.items.forEach((product, index) => {
                        if (product) {
                            product.action = addMarketingParamsInAction(product.action, {
                                f_id: searchId,
                                f_source: 'search',
                                f_content: `${index + 1}`,
                                f_term: params.search,
                            });
                        }
                    });
                }
            }
        }
        catch (err) {
            console.error("Error setting product marketing params: ", err);
        }
        conditionalStoreDispatch(dispatch, setProducts, products, options);
        const eventParams = Object.assign(Object.assign({}, params), (searchId ? { search_id: searchId } : {}));
        emitFPIEvent(FPI_EVENTS.PRODUCT_LIST_VIEW, eventParams, products, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=products.handler.js.map