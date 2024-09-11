import { setcollection } from "../../store/slices/collection";
export function collectionHandler(collection, dispatch) {
    if (collection) {
        dispatch(setcollection(collection));
    }
}
//# sourceMappingURL=collection.handler.js.map