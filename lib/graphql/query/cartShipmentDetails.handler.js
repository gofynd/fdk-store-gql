import { setCartShipmentDetails } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function cartShipmentDetailsHandler(cartShipmentDetails, dispatch, options) {
    if (cartShipmentDetails) {
        conditionalStoreDispatch(dispatch, setCartShipmentDetails, cartShipmentDetails, options);
    }
}
//# sourceMappingURL=cartShipmentDetails.handler.js.map