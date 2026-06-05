/** Config for Juspay Pay-V3 `Setup()`; `sdkLink` is only used for script loading and is stripped before Setup. */
export type JuspaySetupConfig = Record<string, unknown> & {
    sdkLink?: string;
};
export declare function ensureJuspayScriptLoaded(sdkLink?: string): Promise<void>;
/**
 * Loads Pay-V3.js (unless already present), then runs `Juspay.Setup`.
 * Use `{ scriptOnly: true }` to load the script before `#payment_form` exists in the DOM.
 */
export declare function setupJuspay(config: JuspaySetupConfig, options?: {
    scriptOnly?: boolean;
}): Promise<any>;
export default class JuspayPayment {
    selectedPayment: {
        paymentFlowMeta: any;
        merchant_code?: string;
    };
    paymentFlow: any;
    state: any;
    constructor(selectedPayment: {
        paymentFlowMeta: any;
        merchant_code?: string;
    }, state?: any);
    /** Google Pay / Apple Pay native wallet flows (same gateway as CARD). */
    private isJuspayExpressWalletMode;
    createCardPaymentData(obj: {
        card_token: any;
        card_security_code: any;
        card_number: any;
        card_exp_month: any;
        card_exp_year: any;
        name_on_card: any;
    }): {
        card_token: any;
        card_security_code: any;
        card_number?: undefined;
        card_exp_month?: undefined;
        card_exp_year?: undefined;
        name_on_card?: undefined;
        nickname?: undefined;
    } | {
        card_number: any;
        card_security_code: any;
        card_exp_month: any;
        card_exp_year: any;
        name_on_card: any;
        nickname: any;
        card_token?: undefined;
    };
    /**
     * Pay-V3.js for card. Google Pay / Apple Pay use native wallet UIs (no Hyper SDK).
     */
    injectScript(): Promise<void>;
    /**
     * For payv3 (CARD): Resolves with order payload for form population.
     * Pay-V3.js collects card data client-side; form submits to Juspay.
     * For saved card payv3: same as new card but includes card_token/card_isin.
     * For legacy flow: POSTs to api_link (saved cards with CVV / non-payv3).
     */
    transaction(obj: any, consent?: any): Promise<any>;
}
