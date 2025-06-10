import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function orderHandler(res, dispatch, params, oldStore, options) {
    emitFPIEvent(FPI_EVENTS.ORDER_PROCESSED, params, res, oldStore, dispatch, options);
}
//# sourceMappingURL=order.handler.js.map