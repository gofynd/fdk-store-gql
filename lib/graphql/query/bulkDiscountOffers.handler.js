import { setbulkDiscountOffers } from "../../store/slices/product";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function bulkDiscountOffersHandler(bulkDiscountOffers, dispatch, options) {
    if (bulkDiscountOffers) {
        conditionalStoreDispatch(dispatch, setbulkDiscountOffers, bulkDiscountOffers, options);
    }
}
//# sourceMappingURL=bulkDiscountOffers.handler.js.map