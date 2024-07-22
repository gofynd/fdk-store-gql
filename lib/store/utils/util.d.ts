export declare const PENDING_ACTION_TYPE = "PENDING";
export declare const ERROR_ACTION_TYPE = "ERROR";
export declare const FULFILLED_ACTION_TYPE = "FULFILLED";
export declare function createLoadingAction(): {
    type: string;
};
export declare function createErrorAction(): {
    type: string;
};
export declare function createPayloadAction<T>(payload: T): {
    type: string;
    payload: T;
};
