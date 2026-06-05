import { getSupportedUpiIntentApps, checkoutPayment, validateCardDetails } from "../slices/payment";
import { ensureJuspayScriptLoaded, setupJuspay, } from "../utils/gateways/juspay";
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
    ensureJuspayScriptLoaded(sdkLink) {
        return ensureJuspayScriptLoaded(sdkLink);
    }
    setupJuspay(config, options) {
        return setupJuspay(config, options);
    }
}
//# sourceMappingURL=payment.js.map