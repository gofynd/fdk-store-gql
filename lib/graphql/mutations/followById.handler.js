import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function followByIdHandler(res, dispatch, params, oldStore, options) {
    emitFPIEvent(FPI_EVENTS.ADD_TO_WISHLIST, params, res, oldStore, dispatch, options);
}
//# sourceMappingURL=followById.handler.js.map