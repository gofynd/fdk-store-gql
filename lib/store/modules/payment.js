import { getSupportedUpiIntentApps, checkoutPayment, validateCardDetails } from "../slices/payment";
export class PaymentModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    checkoutPayment(payload) {
        return this.dispatch(checkoutPayment(payload));
    }
    getSupportedUpiIntentApps(payload) {
        return this.dispatch(getSupportedUpiIntentApps(payload));
    }
    validateCardDetails(payload) {
        return this.dispatch(validateCardDetails(payload));
    }
}
//# sourceMappingURL=payment.js.map