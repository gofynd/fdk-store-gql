import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function orderHandler(res, dispatch, params, oldStore, options) {
    if (res) {
        emitFPIEvent(FPI_EVENTS.ORDER_VIEW, params, res, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=order.handler.js.map