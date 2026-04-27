import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function updateShipmentStatusHandler(shipment, dispatch, params, oldStore, options) {
    var _a, _b, _c;
    if (shipment) {
        const isReturn = ((_c = (_b = (_a = params === null || params === void 0 ? void 0 : params.updateShipmentStatusRequestInput) === null || _a === void 0 ? void 0 : _a.statuses) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.status) === 'return_initiated';
        if (isReturn) {
            emitFPIEvent(FPI_EVENTS.REFUND_SUCCESS, params, shipment, oldStore, dispatch, options);
        }
    }
}
//# sourceMappingURL=updateShipmentStatus.handler.js.map