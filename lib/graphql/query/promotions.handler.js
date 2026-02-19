import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function promotionsHandler(promotions, dispatch, params, oldStore, options) {
    if (promotions) {
        emitFPIEvent(FPI_EVENTS.PROMOTIONS_VIEW, params, promotions, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=promotions.handler.js.map