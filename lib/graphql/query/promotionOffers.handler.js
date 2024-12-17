import { setpromotionOffers } from "../../store/slices/cart";
export function promotionOffersHandler(promotionOffers, dispatch) {
    if (promotionOffers) {
        dispatch(setpromotionOffers(promotionOffers));
    }
}
//# sourceMappingURL=promotionOffers.handler.js.map