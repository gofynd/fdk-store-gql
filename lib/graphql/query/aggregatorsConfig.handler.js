import { setaggregatorsConfig } from "../../store/slices/payment";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function aggregatorsConfighandler(aggregatorsConfig, dispatch, options) {
    if (aggregatorsConfig) {
        conditionalStoreDispatch(dispatch, setaggregatorsConfig, aggregatorsConfig, options);
    }
}
//# sourceMappingURL=aggregatorsConfig.handler.js.map