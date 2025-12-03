import { setstore } from "../../store/slices/configuration";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function storeHandler(store, dispatch, options) {
    if (store) {
        conditionalStoreDispatch(dispatch, setstore, store, options);
    }
}
//# sourceMappingURL=store.handler.js.map