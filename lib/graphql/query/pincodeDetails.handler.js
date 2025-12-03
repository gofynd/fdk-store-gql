import { setpincodeDetails } from "../../store/slices/logistic";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function pincodeDetailsHandler(pincodeDetails, dispatch, params, options) {
    if (pincodeDetails) {
        conditionalStoreDispatch(dispatch, setpincodeDetails, Object.assign(Object.assign({}, pincodeDetails), params), options);
    }
}
//# sourceMappingURL=pincodeDetails.handler.js.map