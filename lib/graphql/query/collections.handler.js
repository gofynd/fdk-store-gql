import { setcollections } from "../../store/slices/collection";
export function collectionsHandler(collections, dispatch) {
    if (collections) {
        dispatch(setcollections(collections));
    }
}
//# sourceMappingURL=collections.handler.js.map