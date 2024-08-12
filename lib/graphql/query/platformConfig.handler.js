import { setplatformConfig } from "../../store/slices/auth";
export function platformConfigHandler(platformConfig, dispatch) {
    if (platformConfig) {
        dispatch(setplatformConfig(platformConfig));
    }
}
//# sourceMappingURL=platformConfig.handler.js.map