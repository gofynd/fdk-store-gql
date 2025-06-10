import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function selectPaymentModehandler(res, dispatch, params, oldStore, options) {
    emitFPIEvent(FPI_EVENTS.ADD_PAYMENT_INFORMATION, params, res, oldStore, dispatch, options);
}
//# sourceMappingURL=selectPaymentMode.handler.js.map