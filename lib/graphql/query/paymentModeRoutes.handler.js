import { setPaymentModeRoutes } from "../../store/slices/payment";
import { conditionalStoreDispatch } from "../../store/utils/util";
const themeMap = {};
export function paymentModeRoutesHandler(paymentModeRoutes, dispatch, options) {
    if (paymentModeRoutes.payment_options) {
        conditionalStoreDispatch(dispatch, setPaymentModeRoutes, paymentModeRoutes.payment_options, options);
    }
}
//# sourceMappingURL=paymentModeRoutes.handler.js.map