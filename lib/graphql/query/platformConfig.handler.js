import { setplatformConfig } from "../../store/slices/auth";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function platformConfigHandler(platformConfig, dispatch, options) {
    if (platformConfig) {
        conditionalStoreDispatch(dispatch, setplatformConfig, platformConfig, options);
    }
}
//# sourceMappingURL=platformConfig.handler.js.map