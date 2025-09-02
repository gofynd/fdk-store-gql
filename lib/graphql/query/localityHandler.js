import { setlocality } from "../../store/slices/logistic";
export function localityHandler(locality, dispatch, params, store, options) {
    var _a;
    let countryDetails = ((_a = store === null || store === void 0 ? void 0 : store.custom) === null || _a === void 0 ? void 0 : _a.countryDetails) || {};
    let meta = (options === null || options === void 0 ? void 0 : options.meta) || {};
    if (locality) {
        dispatch(setlocality(Object.assign(Object.assign(Object.assign({}, locality), params), { countryDetails, meta })));
    }
}
//# sourceMappingURL=localityHandler.js.map