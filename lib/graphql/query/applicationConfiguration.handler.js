import { setappDetails, setContactInfo, setFeatures, setintegrationTokens, setdeploymentStore, setcurrency } from "../../store/slices/configuration";
export function applicationConfigurationHandler(appconfiguration, dispatch) {
    const { appDetails = null, contactInfo = null, features = null, integrationTokens = null, } = appconfiguration;
    const commonFeatures = (features === null || features === void 0 ? void 0 : features.common) || {};
    if (appDetails) {
        dispatch(setappDetails(appDetails));
    }
    if (contactInfo) {
        dispatch(setContactInfo(contactInfo));
    }
    if (features) {
        dispatch(setFeatures(features));
    }
    if (integrationTokens) {
        dispatch(setintegrationTokens(integrationTokens));
    }
    if (commonFeatures.deployment_store_selection) {
        dispatch(setdeploymentStore(commonFeatures.deployment_store_selection));
    }
    if (commonFeatures.currency) {
        dispatch(setcurrency(commonFeatures.currency));
    }
}
//# sourceMappingURL=applicationConfiguration.handler.js.map