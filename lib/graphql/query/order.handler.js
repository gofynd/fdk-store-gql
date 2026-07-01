import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function orderHandler(res, dispatch, params, oldStore, options) {
    var _a;
    if (res) {
        const isSplitPaymentPending = (_a = res.shipments) === null || _a === void 0 ? void 0 : _a.some((s) => {
            var _a, _b;
            return ((_a = s === null || s === void 0 ? void 0 : s.shipment_status) === null || _a === void 0 ? void 0 : _a.value) === "Split Payment Pending" ||
                ((_b = s === null || s === void 0 ? void 0 : s.shipment_status) === null || _b === void 0 ? void 0 : _b.value) === "split_payment_pending";
        });
        if (isSplitPaymentPending)
            return;
        emitFPIEvent(FPI_EVENTS.ORDER_PROCESSED, params, res, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=order.handler.js.map