import { setbulkDiscountOffers } from "../../store/slices/product";
export function bulkDiscountOffersHandler(bulkDiscountOffers, dispatch) {
    if (bulkDiscountOffers) {
        dispatch(setbulkDiscountOffers(bulkDiscountOffers));
    }
}
//# sourceMappingURL=bulkDiscountOffers.handler.js.map