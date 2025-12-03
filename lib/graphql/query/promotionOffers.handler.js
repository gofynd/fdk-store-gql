import { setpromotionOffers } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function promotionOffersHandler(promotionOffers, dispatch, options) {
    if (promotionOffers) {
        conditionalStoreDispatch(dispatch, setpromotionOffers, promotionOffers, options);
    }
}
//# sourceMappingURL=promotionOffers.handler.js.map