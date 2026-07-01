export declare function handleConfirmPayment(params: any): Promise<any>;
export declare function getUpiIntentApps(paymentOptions: any): Promise<any>;
export declare function verifyCardDetails(payload: any): Promise<void>;
export declare function handleCODOrder(paymentOptions: any): Promise<void>;
export declare function handleQrOrder(paymentOptions: object): Promise<any>;
export declare function transactOrder(paymentOptions: any, state: any): Promise<any>;
export declare function updateOrderInfo(currentPaymentGateway: any, orderInfo: any, paymentOptions: any): any;
export declare function handleUpiOrder(paymentOptions: any): Promise<any>;
/**
 * Creates a SPLIT order "shell" via checkoutCart. This does NOT collect any
 * money — it only creates an unpaid order (collect_type SPLIT) and returns the
 * order_id. Every individual split is charged later via transactSplit.
 */
export declare function splitCheckout(paymentOptions: any): Promise<any>;
/**
 * Charges a single split against an existing SPLIT order via createPaymentOrder,
 * then hands the resulting payment data off to the payment gateway using the same
 * machinery as the regular single-payment flow.
 */
export declare function transactSplit(paymentOptions: any, state: any): Promise<any>;
