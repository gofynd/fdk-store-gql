import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function productComparisonHandler(productComparison, dispatch, params, oldStore, options) {
    if (productComparison) {
        emitFPIEvent(FPI_EVENTS.COMPARE_VIEW, params, productComparison, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=productComparison.handler.js.map