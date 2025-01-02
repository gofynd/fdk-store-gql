import { dummyFormSubmit } from "./helper";
export default class StandardExtension {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    /*
          transaction
      **/
    transaction(obj) {
        return new Promise((resolve, reject) => {
            try {
                dummyFormSubmit(this.paymentFlow.api_link, obj, "POST");
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
//# sourceMappingURL=standard_extension.js.map