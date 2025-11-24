import { setcollectionItems } from "../../store/slices/collection";
import { addMarketingParamsInAction } from "../../helpers/utils";
export function collectionItemsHandler(collectionItems, dispatch, params) {
    if (collectionItems) {
        try {
            if (collectionItems === null || collectionItems === void 0 ? void 0 : collectionItems.items) {
                collectionItems.items.forEach((item, index) => {
                    if (item) {
                        item.action = addMarketingParamsInAction(item.action, {
                            f_id: params === null || params === void 0 ? void 0 : params.slug,
                            f_source: 'collection',
                            f_content: `${index + 1}`,
                        });
                    }
                });
            }
        }
        catch (err) {
            console.log("Error setting collection items marketing params: ", err);
        }
        dispatch(setcollectionItems(collectionItems));
    }
}
//# sourceMappingURL=collectionItems.handler.js.map