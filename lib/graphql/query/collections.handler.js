import { setcollections } from "../../store/slices/collection";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function collectionsHandler(collections, dispatch, options) {
    if (collections) {
        conditionalStoreDispatch(dispatch, setcollections, collections, options);
    }
}
//# sourceMappingURL=collections.handler.js.map