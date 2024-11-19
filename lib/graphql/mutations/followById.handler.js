import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function followByIdHandler(res, dispatch, params, oldStore) {
    emitFPIEvent(FPI_EVENTS.ADD_TO_WISHLIST, params, res, oldStore);
}
//# sourceMappingURL=followById.handler.js.map