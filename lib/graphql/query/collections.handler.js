import { setcollections } from "../../store/slices/collection";
import { conditionalStoreDispatch } from "../../store/utils/util";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function collectionsHandler(collections, dispatch, params, oldStore, options) {
    if (collections) {
        conditionalStoreDispatch(dispatch, setcollections, collections, options);
        emitFPIEvent(FPI_EVENTS.COLLECTIONS_VIEW, params, collections, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=collections.handler.js.map