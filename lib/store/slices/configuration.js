var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
export const fetchApplication = createAsyncThunk("application", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchContactInfo = createAsyncThunk("appContactInfo", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchAppFeatures = createAsyncThunk("appFeatures", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchAppIntegrationTokens = createAsyncThunk("appTokens", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchDeploymentStores = createAsyncThunk("deploymentStores", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchStaff = createAsyncThunk("staff", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchStoreById = createAsyncThunk("storeDetails", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchAppCurrencies = createAsyncThunk("currnecies", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
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
        }
    },
    extraReducers: (builder) => {
        builder
            //application
            .addCase(fetchApplication.pending, (state) => {
            state.application = {
                loading: true
            };
        })
            .addCase(fetchApplication.fulfilled, (state, action) => {
            state.application = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchApplication.rejected, (state, action) => {
            state.application = {
                error: action.error,
                loading: false
            };
        })
            //contact info
            .addCase(fetchContactInfo.pending, (state) => {
            state.contact_info = {
                loading: true
            };
        })
            .addCase(fetchContactInfo.fulfilled, (state, action) => {
            state.contact_info = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchContactInfo.rejected, (state, action) => {
            state.contact_info = {
                error: action.error,
                loading: false
            };
        })
            //app features
            .addCase(fetchAppFeatures.pending, (state) => {
            state.app_features = {
                loading: true
            };
        })
            .addCase(fetchAppFeatures.fulfilled, (state, action) => {
            state.app_features = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchAppFeatures.rejected, (state, action) => {
            state.app_features = {
                error: action.error,
                loading: false
            };
        })
            //app integration tokens
            .addCase(fetchAppIntegrationTokens.pending, (state) => {
            state.integration_tokens = {
                loading: true
            };
        })
            .addCase(fetchAppIntegrationTokens.fulfilled, (state, action) => {
            state.integration_tokens = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchAppIntegrationTokens.rejected, (state, action) => {
            state.integration_tokens = Object.assign({}, { error: action.error, loading: false });
        })
            //deployment stores
            .addCase(fetchDeploymentStores.pending, (state) => {
            state.deployment_stores = {
                loading: true
            };
        })
            .addCase(fetchDeploymentStores.fulfilled, (state, action) => {
            state.deployment_stores = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchDeploymentStores.rejected, (state, action) => {
            state.deployment_stores = Object.assign({}, { error: action.error, loading: false });
        })
            //staff
            .addCase(fetchStaff.pending, (state) => {
            state.staff = {
                loading: true
            };
        })
            .addCase(fetchStaff.fulfilled, (state, action) => {
            state.staff = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchStaff.rejected, (state, action) => {
            state.staff = Object.assign({}, { error: action.error, loading: false });
        })
            //store details
            .addCase(fetchStoreById.pending, (state) => {
            state.store_details = {
                loading: true
            };
        })
            .addCase(fetchStoreById.fulfilled, (state, action) => {
            state.store_details = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchStoreById.rejected, (state, action) => {
            state.store_details = Object.assign({}, { error: action.error, loading: false });
        })
            //currencies
            .addCase(fetchAppCurrencies.pending, (state) => {
            state.currencies = {
                loading: true
            };
        })
            .addCase(fetchAppCurrencies.fulfilled, (state, action) => {
            state.currencies = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchAppCurrencies.rejected, (state, action) => {
            state.currencies = Object.assign({}, { error: action.error, loading: false });
        });
    },
});
export const configurationReducer = configurationSlice.reducer;
export const { setappDetails, setContactInfo, setstore, setFeatures, setapplicationStaff, setintegrationTokens, setdeploymentStore, setcurrency } = configurationSlice.actions;
//# sourceMappingURL=configuration.js.map