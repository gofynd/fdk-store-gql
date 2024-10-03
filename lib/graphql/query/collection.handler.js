import { setcollection } from "../../store/slices/collection";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function collectionHandler(collection, dispatch, params, oldStore) {
    if (collection) {
        dispatch(setcollection(collection));
        emitFPIEvent(FPI_EVENTS.COLLECTION_LIST_VIEW, params, collection, oldStore);
    }
}
//# sourceMappingURL=collection.handler.js.map