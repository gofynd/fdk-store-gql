import { setcollectionItems } from "../../store/slices/collection";
export function collectionItemsHandler(collectionItems, dispatch) {
    if (collectionItems) {
        dispatch(setcollectionItems(collectionItems));
    }
}
//# sourceMappingURL=collectionItems.handler.js.map