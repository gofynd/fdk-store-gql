import { CommonAsyncLoadingTypes } from ".";
export type ApplicationType = Partial<any & CommonAsyncLoadingTypes>;
export type ContactInfo = Partial<any & CommonAsyncLoadingTypes>;
export type AppFeatures = Partial<any & CommonAsyncLoadingTypes>;
export type IntegrationTokens = Partial<any & CommonAsyncLoadingTypes>;
export type DeploymentStores = Partial<any & CommonAsyncLoadingTypes>;
export type Staff = Partial<any & CommonAsyncLoadingTypes>;
export type StoreDetails = Partial<any & CommonAsyncLoadingTypes>;
export type Currencies = Partial<any & CommonAsyncLoadingTypes>;
export type ConfigurationSlice = {
    application: ApplicationType;
    contact_info: ContactInfo;
    app_features: AppFeatures;
    integration_tokens: IntegrationTokens;
    deployment_stores: DeploymentStores;
    staff: Staff;
    store_details: StoreDetails;
    currencies: Currencies;
};
