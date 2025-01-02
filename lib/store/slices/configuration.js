import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    application: {},
    contact_info: {},
    app_features: {},
    integration_tokens: {},
    deployment_stores: {},
    staff: {},
    store_details: {},
    currencies: {},
};
const configurationSlice = createSlice({
    name: STORE_KEYS.CONFIGURATION,
    initialState,
    reducers: {
        setappDetails(state, action) {
            state.application = action.payload;
        },
        setContactInfo(state, action) {
            state.contact_info = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setFeatures(state, action) {
            state.app_features = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setintegrationTokens(state, action) {
            state.integration_tokens = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setdeploymentStore(state, action) {
            state.deployment_stores = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setcurrency(state, action) {
            state.currencies = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setstore(state, action) {
            state.store_details = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setapplicationStaff(state, action) {
            state.staff = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
    },
});
export const configurationReducer = configurationSlice.reducer;
export const { setappDetails, setContactInfo, setstore, setFeatures, setapplicationStaff, setintegrationTokens, setdeploymentStore, setcurrency, } = configurationSlice.actions;
//# sourceMappingURL=configuration.js.map