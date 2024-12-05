import { setstore } from "../../store/slices/configuration";
export function storeHandler(store, dispatch) {
    if (store) {
        dispatch(setstore(store));
    }
}
//# sourceMappingURL=store.handler.js.map