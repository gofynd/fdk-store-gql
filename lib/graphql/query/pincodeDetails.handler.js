import { setpincodeDetails } from "../../store/slices/logistic";
export function pincodeDetailsHandler(pincodeDetails, dispatch, params) {
    if (pincodeDetails) {
        dispatch(setpincodeDetails(Object.assign(Object.assign({}, pincodeDetails), params)));
    }
}
//# sourceMappingURL=pincodeDetails.handler.js.map