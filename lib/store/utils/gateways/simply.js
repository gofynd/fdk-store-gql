var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const MESSAGES = {
    unauthorized: "Oops! Unable to proceed with transaction. Retry later",
    user_not_found: "Oops! your mobile number isn't liked to a Simpl account",
    user_unauthorized: "Oops! your account has been blocked by Simpl",
    unable_to_process: "Oops! this transaction exceeds your Simpl credit limit",
    insufficient_credit: "Oops! this transaction exceeds your Simpl credit limit",
    order_id_already_exists: "Oops! a transaction with the same order id already exists",
    transaction_amount_zero_error: "Oops! transaction amount can't be 0",
    refund_amount_greater_than_transaction_amount: "Oops! refund amount is greater than transaction amount",
    invalid_transaction_token: "Oops! Unable to proceed with transaction. Retry later",
    bad_request: "Oops! Unable to proceed with transaction. Retry later",
    user_cancelled: "Transaction has been cancelled",
};
export default class SimplypayPayment {
    constructor(selectedPayment) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
    }
    /**
     * This method is caled while paymentOptions list page only.
     * To verify that this user is allowed to do simple payment or not.
     */
    verifyUser() {
        const self = this;
        const $SimpleRadio = document.querySelector("#" + self.selectedPayment.id + " " + "[data-payment-input]");
        const $subTitle = document.querySelector("#" + self.selectedPayment.id + " " + "[data-subtitle]");
        return new Promise(function (resolve, reject) {
            if (!window.Simpl) {
                return reject({ message: MESSAGES.bad_request });
            }
            if (self.paymentFlow.data.gateway.is_customer_validation_required) {
                window.Simpl.generateFingerprint(self.paymentFlow.data.gateway.sdk.data.user_phone, self.paymentFlow.data.gateway.sdk.data.user_email, function (payload) {
                    return resolve(payload);
                });
            }
        })
            .then(function (res) {
            return self.checkSimpleApproval({
                payload: res,
                aggregator: self.selectedPayment.aggregator_name,
                phone_number: self.paymentFlow.data.gateway.sdk.data.user_phone,
                merchant_params: {
                    source: "web",
                },
                merchant_profile_id: 1,
                transaction_amount_in_paise: self.selectedPayment.amount,
            });
        })
            .then(function (sc) {
            $SimpleRadio === null || $SimpleRadio === void 0 ? void 0 : $SimpleRadio.removeAttribute("disabled");
            if ($subTitle) {
                $subTitle.innerHTML = "Yay! Grab a new wardrobe & Pay Later!";
            }
        })
            .catch(function (err) {
            $SimpleRadio === null || $SimpleRadio === void 0 ? void 0 : $SimpleRadio.setAttribute("disabled", "true");
            if ($subTitle) {
                $subTitle.innerHTML = "Sorry! Please try some other payment method!";
            }
        });
    }
    checkSimpleApproval(data) {
        const { merchant_profile_id } = data, options = __rest(data, ["merchant_profile_id"]);
        return new Promise((resolve, reject) => {
            window.fpi
                .executeGQL(`
            mutation VerifyCustomerForPayment {
              verifyCustomerForPayment(
                validateCustomerRequestInput: {
                  aggregator: "${data.aggregator}"
                  merchant_params: "${data.merchant_params}"
                  payload: "${data.payload}"
                  phone_number: "${data.phone_number}"
                  transaction_amount_in_paise: ${data.transaction_amount_in_paise}
                }
              ) {
                data
                message
                success
              }
            }
          `)
                .then((data) => {
                var _a, _b;
                if (data.success && ((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.approved)) {
                    return resolve(data);
                }
                const er = new Error(data.message);
                er.data = data;
                return reject(er);
            })
                .catch((err) => {
                return reject(err);
            })
                .finally(() => {
                resolve();
            });
        });
    }
    /*
          transaction
      **/
    transaction(obj) {
        const self = this;
        return new Promise(function (resolve, reject) {
            window.Simpl.setUserConfig({
                email: obj.user_email,
                phone_number: obj.user_phone,
            });
            window.Simpl.setTransactionAmount(obj.amount);
            window.Simpl.authorizeTransaction();
            window.Simpl.on("success", function (response) {
                // response from Simpl will include the following keys:
                // { status: 'success', transaction_token: 'xyz' }
                self
                    .chargeCustomer(response, obj)
                    .then(function (res) {
                    return resolve(res);
                })
                    .catch(function (err) {
                    return reject(err);
                });
            });
            window.Simpl.on("error", function (response) {
                // response from Simpl will include the following keys:
                // { status: 'error', message: 'Something went wrong.' }
                const msg = response.message || MESSAGES.bad_request;
                const err = new Error(`${msg}`);
                err.res = response;
                return reject(err);
            });
        });
    }
    chargeCustomer(tokenData, orderData) {
        const options = {
            transaction_token: tokenData.transaction_token,
            order_id: orderData.order_id,
            aggregator: "Simpl",
            amount: orderData.amount,
        };
        return new Promise((resolve, reject) => {
            window.fpi
                .executeGQL(`
            mutation VerifyAndChargePayment {
              verifyAndChargePayment(
                chargeCustomerRequestInput: {
                  aggregator: "${options.aggregator}",
                  amount: ${options.amount},
                  order_id: "${options.order_id}",
                  transaction_token: "${options.transaction_token}",
                }
              ) {
                aggregator
                cart_id
                delivery_address_id
                message
                order_id
                status
                success
              }
            }
          `)
                .then((data) => {
                if (data.success) {
                    return resolve(data);
                }
                const er = new Error(data.message);
                er.data = data;
                return reject(er);
            })
                .catch((err) => {
                return reject(err);
            })
                .finally(() => {
                return resolve();
            });
        });
    }
    injectScript(payment_config) {
        var _a;
        let scriptObject = {
            src: "https://cdn.getsimpl.com/simpl-custom-v1.min.js",
            attrs: {
                id: "getsimpl",
                "data-env": payment_config.env === "live" ? "production" : "sandbox",
                "data-merchant-id": (_a = payment_config.simpl) === null || _a === void 0 ? void 0 : _a.key,
            },
        };
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = scriptObject.src;
            // Set attributes if provided
            if (scriptObject.attrs) {
                Object.keys(scriptObject.attrs).forEach((attr) => {
                    script.setAttribute(attr, scriptObject.attrs[attr]);
                });
            }
            // Resolve promise when script is loaded
            script.onload = () => {
                resolve();
            };
            // Reject promise if there's an error loading the script
            script.onerror = () => {
                reject(new Error(`Failed to load script: ${script.src}`));
            };
            // Append script to the document body
            document.body.appendChild(script);
        });
    }
}
//# sourceMappingURL=simply.js.map