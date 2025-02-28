import { dummyFormSubmit } from "./helper";
export default class CcavenuePayment {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    transaction(obj) {
        return new Promise((resolve, reject) => {
            try {
                dummyFormSubmit(this.paymentFlow.api_link, obj, 'POST');
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
//# sourceMappingURL=ccavenue.js.map