import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function unfollowByIdHandler(res, dispatch, params, oldStore, options) {
    emitFPIEvent(FPI_EVENTS.REMOVE_FROM_WISHLIST, params, res, oldStore, dispatch, options);
}
//# sourceMappingURL=UnFollowById.handler.js.map