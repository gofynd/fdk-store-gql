export const PENDING_ACTION_TYPE = 'PENDING';
export const ERROR_ACTION_TYPE = 'ERROR';
export const FULFILLED_ACTION_TYPE = 'FULFILLED';
export function createLoadingAction() {
    return {
        type: PENDING_ACTION_TYPE,
    };
}
export function createErrorAction() {
    return {
        type: ERROR_ACTION_TYPE,
    };
}
export function createPayloadAction(payload) {
    return {
        type: FULFILLED_ACTION_TYPE,
        payload,
    };
}
//# sourceMappingURL=util.js.map