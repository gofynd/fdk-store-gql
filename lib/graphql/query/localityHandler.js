import { setlocality } from "../../store/slices/logistic";
export function localityHandler(locality, dispatch, params, store) {
    var _a;
    let countryDetails = ((_a = store === null || store === void 0 ? void 0 : store.custom) === null || _a === void 0 ? void 0 : _a.countryDetails) || {};
    if (locality) {
        dispatch(setlocality(Object.assign(Object.assign(Object.assign({}, locality), params), { countryDetails })));
    }
}
//# sourceMappingURL=localityHandler.js.map