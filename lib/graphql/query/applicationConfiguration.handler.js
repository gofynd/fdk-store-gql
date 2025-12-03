import { setappDetails, setContactInfo, setFeatures, setintegrationTokens, setdeploymentStore, setcurrency, } from "../../store/slices/configuration";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function applicationConfigurationHandler(appconfiguration, dispatch, options) {
    const { app_details = null, contact_info = null, features = null, integration_tokens = null, } = appconfiguration;
    const commonFeatures = (features === null || features === void 0 ? void 0 : features.common) || {};
    if (app_details) {
        conditionalStoreDispatch(dispatch, setappDetails, app_details, options);
    }
    if (contact_info) {
        conditionalStoreDispatch(dispatch, setContactInfo, contact_info, options);
    }
    if (features) {
        conditionalStoreDispatch(dispatch, setFeatures, features, options);
    }
    if (integration_tokens) {
        conditionalStoreDispatch(dispatch, setintegrationTokens, integration_tokens, options);
    }
    if (commonFeatures.deployment_store_selection) {
        conditionalStoreDispatch(dispatch, setdeploymentStore, commonFeatures.deployment_store_selection, options);
    }
    if (commonFeatures.currency) {
        conditionalStoreDispatch(dispatch, setcurrency, commonFeatures.currency, options);
    }
}
//# sourceMappingURL=applicationConfiguration.handler.js.map