import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function unfollowByIdHandler(res, dispatch, params, oldStore) {
    emitFPIEvent(FPI_EVENTS.REMOVE_FROM_WISHLIST, params, res, oldStore);
}
//# sourceMappingURL=UnFollowById.handler.js.map