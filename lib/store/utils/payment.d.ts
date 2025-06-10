export declare function handleConfirmPayment(params: any): Promise<any>;
export declare function getUpiIntentApps(paymentOptions: any): Promise<any>;
export declare function verifyCardDetails(payload: any): Promise<void>;
export declare function handleCODOrder(paymentOptions: any): Promise<void>;
export declare function handleQrOrder(paymentOptions: object): Promise<any>;
export declare function transactOrder(paymentOptions: any, state: any): Promise<void>;
export declare function updateOrderInfo(currentPaymentGateway: any, orderInfo: any, paymentOptions: any): any;
export declare function handleUpiOrder(paymentOptions: any): Promise<any>;
