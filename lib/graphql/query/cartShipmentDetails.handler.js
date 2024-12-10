import { setCartShipmentDetails } from "../../store/slices/cart";
export function cartShipmentDetailsHandler(cartShipmentDetails, dispatch) {
    if (cartShipmentDetails) {
        dispatch(setCartShipmentDetails(cartShipmentDetails));
    }
}
//# sourceMappingURL=cartShipmentDetails.handler.js.map