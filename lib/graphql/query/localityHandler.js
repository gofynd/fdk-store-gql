import { setlocality } from "../../store/slices/logistic";
export function localityHandler(locality, dispatch, params) {
    if (locality) {
        dispatch(setlocality(Object.assign(Object.assign({}, locality), params)));
    }
}
//# sourceMappingURL=localityHandler.js.map