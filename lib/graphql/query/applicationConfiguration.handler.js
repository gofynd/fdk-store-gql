import { setappDetails, setContactInfo, setFeatures, setintegrationTokens, setdeploymentStore, setcurrency, } from "../../store/slices/configuration";
export function applicationConfigurationHandler(appconfiguration, dispatch) {
    const { app_details = null, contact_info = null, features = null, integration_tokens = null, } = appconfiguration;
    const commonFeatures = (features === null || features === void 0 ? void 0 : features.common) || {};
    if (app_details) {
        dispatch(setappDetails(app_details));
    }
    if (contact_info) {
        dispatch(setContactInfo(contact_info));
    }
    if (features) {
        dispatch(setFeatures(features));
    }
    if (integration_tokens) {
        dispatch(setintegrationTokens(integration_tokens));
    }
    if (commonFeatures.deployment_store_selection) {
        dispatch(setdeploymentStore(commonFeatures.deployment_store_selection));
    }
    if (commonFeatures.currency) {
        dispatch(setcurrency(commonFeatures.currency));
    }
}
//# sourceMappingURL=applicationConfiguration.handler.js.map