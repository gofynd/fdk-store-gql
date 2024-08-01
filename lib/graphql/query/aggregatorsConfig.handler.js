import { setaggregatorsConfig } from "../../store/slices/payment";
export function aggregatorsConfighandler(aggregatorsConfig, dispatch) {
    if (aggregatorsConfig) {
        dispatch(setaggregatorsConfig(aggregatorsConfig));
    }
}
//# sourceMappingURL=aggregatorsConfig.handler.js.map