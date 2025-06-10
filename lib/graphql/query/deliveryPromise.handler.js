import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function deliveryPromiseHandler(deliveryPromise, dispatch, params, oldStore, options, error) {
    let emitObj = deliveryPromise;
    if (!deliveryPromise) {
        emitObj = error;
    }
    emitFPIEvent(FPI_EVENTS.DELIVERY_PROMISE, params, emitObj, oldStore, dispatch, options);
}
//# sourceMappingURL=deliveryPromise.handler.js.map