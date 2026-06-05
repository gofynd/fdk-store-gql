var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import qs from "qs";
const PAYV3_SCRIPT_URL = "https://api.juspay.in/pay-v3.js";
export function ensureJuspayScriptLoaded(sdkLink) {
    const url = sdkLink || PAYV3_SCRIPT_URL;
    return new Promise((resolve, reject) => {
        if (typeof window === "undefined") {
            resolve();
            return;
        }
        if (window.Juspay) {
            resolve();
            return;
        }
        const existing = document.querySelector(`script[src="${url}"]`);
        if (existing) {
            resolve();
            return;
        }
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load Juspay script: ${url}`));
        document.body.appendChild(script);
    });
}
/**
 * Loads Pay-V3.js (unless already present), then runs `Juspay.Setup`.
 * Use `{ scriptOnly: true }` to load the script before `#payment_form` exists in the DOM.
 */
export function setupJuspay(config, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const sdkLink = (typeof config.sdkLink === "string" && config.sdkLink) || PAYV3_SCRIPT_URL;
        yield ensureJuspayScriptLoaded(sdkLink);
        if (options === null || options === void 0 ? void 0 : options.scriptOnly) {
            return undefined;
        }
        if (typeof window === "undefined" || !window.Juspay) {
            return undefined;
        }
        const { sdkLink: _omit } = config, setupPayload = __rest(config, ["sdkLink"]);
        return window.Juspay.Setup(setupPayload);
    });
}
export default class JuspayPayment {
    constructor(selectedPayment, state) {
        this.selectedPayment = selectedPayment;
        this.paymentFlow = selectedPayment.paymentFlowMeta;
        this.state = state;
    }
    /** Google Pay / Apple Pay native wallet flows (same gateway as CARD). */
    isJuspayExpressWalletMode(consent) {
        var _a, _b;
        const mode = String(((_a = consent === null || consent === void 0 ? void 0 : consent.paymentdata) === null || _a === void 0 ? void 0 : _a.payment_mode) || "").toUpperCase();
        if (mode === "GOOGLEPAY" || mode === "APPLEPAY") {
            return true;
        }
        const mc = String(((_b = this.selectedPayment) === null || _b === void 0 ? void 0 : _b.merchant_code) || "").toUpperCase();
        return mc === "GOOGLEPAY" || mc === "APPLEPAY";
    }
    createCardPaymentData(obj) {
        if (obj.card_token) {
            return {
                card_token: obj.card_token,
                card_security_code: obj.card_security_code,
            };
        }
        else {
            return {
                card_number: obj.card_number,
                card_security_code: obj.card_security_code,
                card_exp_month: obj.card_exp_month,
                card_exp_year: obj.card_exp_year,
                name_on_card: obj.name_on_card,
                nickname: obj.name_on_card,
            };
        }
    }
    /**
     * Pay-V3.js for card. Google Pay / Apple Pay use native wallet UIs (no Hyper SDK).
     */
    injectScript() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const mc = String(((_a = this.selectedPayment) === null || _a === void 0 ? void 0 : _a.merchant_code) || "").toUpperCase();
        const flow = String(((_b = this.paymentFlow) === null || _b === void 0 ? void 0 : _b.payment_flow) || "").toLowerCase();
        if (mc === "GOOGLEPAY" ||
            mc === "APPLEPAY" ||
            flow.includes("googlepay") ||
            flow.includes("applepay")) {
            return Promise.resolve();
        }
        const sdkLink = ((_d = (_c = this.paymentFlow) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.sdk_link) ||
            ((_h = (_g = (_f = (_e = this.state) === null || _e === void 0 ? void 0 : _e.payment) === null || _f === void 0 ? void 0 : _f.aggregators_config) === null || _g === void 0 ? void 0 : _g.juspay) === null || _h === void 0 ? void 0 : _h.sdk) ||
            PAYV3_SCRIPT_URL;
        return ensureJuspayScriptLoaded(sdkLink);
    }
    /**
     * For payv3 (CARD): Resolves with order payload for form population.
     * Pay-V3.js collects card data client-side; form submits to Juspay.
     * For saved card payv3: same as new card but includes card_token/card_isin.
     * For legacy flow: POSTs to api_link (saved cards with CVV / non-payv3).
     */
    transaction(obj, consent) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const isExpressWallet = this.isJuspayExpressWalletMode(consent);
        const hasCardTokenWithCvv = obj.card_token && obj.card_security_code;
        const paymentMode = String(((_a = consent === null || consent === void 0 ? void 0 : consent.paymentdata) === null || _a === void 0 ? void 0 : _a.payment_mode) || "").toUpperCase();
        const isNonCardPaymentMode = !!paymentMode && paymentMode !== "CARD";
        const isPayV3Flow = !isNonCardPaymentMode &&
            !isExpressWallet &&
            !obj.card_number &&
            !hasCardTokenWithCvv &&
            ((_b = this.paymentFlow) === null || _b === void 0 ? void 0 : _b.payment_flow) !== "legacy";
        if (isPayV3Flow) {
            const merchantId = obj.merchant_id ||
                ((_f = (_e = (_d = (_c = this.state) === null || _c === void 0 ? void 0 : _c.payment) === null || _d === void 0 ? void 0 : _d.aggregators_config) === null || _e === void 0 ? void 0 : _e.juspay) === null || _f === void 0 ? void 0 : _f.merchant_id) ||
                ((_h = (_g = this.paymentFlow) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.merchant_id);
            const orderId = obj.order_id || ((_j = obj.checkoutCart) === null || _j === void 0 ? void 0 : _j.order_id);
            return Promise.resolve({
                data: Object.assign({ order_id: orderId, merchant_id: merchantId, callback_url: obj.callback_url }, obj),
            });
        }
        const self = this;
        const data = Object.assign({}, obj, {
            format: "json",
            redirect_after_payment: "true",
        });
        return new Promise(function (resolve, reject) {
            const httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function () {
                var _a;
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        const jpData = JSON.parse(httpRequest.responseText);
                        const authentication = (_a = jpData.payment) === null || _a === void 0 ? void 0 : _a.authentication;
                        if (authentication === null || authentication === void 0 ? void 0 : authentication.url) {
                            if (authentication.method !== "POST") {
                                window.location.href = authentication.url;
                            }
                            return resolve();
                        }
                    }
                    else {
                        try {
                            const jpData = JSON.parse(httpRequest.responseText);
                            return reject(new Error(jpData.error_message || "Transaction Initiation Failed"));
                        }
                        catch (_b) {
                            return reject(new Error("Transaction Initiation Failed"));
                        }
                    }
                }
            };
            httpRequest.open("POST", self.paymentFlow.api_link);
            httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            httpRequest.send(qs.stringify(data));
        });
    }
}
//# sourceMappingURL=juspay.js.map