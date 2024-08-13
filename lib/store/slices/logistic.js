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
import { setCookie } from "../../helpers/utils";
import { STORE_KEYS, COOKIE_KEYS } from "../enums/keys";
const initialState = {
    countries: {},
    product_tat: {},
    pincode_details: {},
};
export const fetchAllCountries = createAsyncThunk("countries", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const getTatProduct = createAsyncThunk("tatProduct", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchPincodeDetails = createAsyncThunk("pincodeDetails", (params, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        if (params.data.success) {
            const locationObj = (_d = (_c = (_b = (_a = params.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.parents) === null || _c === void 0 ? void 0 : _c.reduce) === null || _d === void 0 ? void 0 : _d.call(_c, (acc, curr) => {
                acc[curr.sub_type] = curr.name;
                return acc;
            }, {});
            const locationData = {
                country: (locationObj === null || locationObj === void 0 ? void 0 : locationObj.country) || "India",
                city: locationObj === null || locationObj === void 0 ? void 0 : locationObj.city,
                pincode: `${params.pincode}`,
            };
            setCookie(COOKIE_KEYS.LOCATION_DATA, locationData, 1);
            //TODO
            //sdk.setLocationDetails(locationData as any);
            return params;
        }
        return rejectWithValue(params.errors[0].message);
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}));
const logisticSlice = createSlice({
    name: STORE_KEYS.LOGISTIC,
    initialState,
    reducers: {
        setallCountries(state, action) {
            state.countries = action.payload;
        },
        setpincodeDetails(state, action) {
            var _a, _b, _c;
            if (action.payload.success) {
                const locationObj = (_b = (_a = action.payload.data) === null || _a === void 0 ? void 0 : _a.reduce) === null || _b === void 0 ? void 0 : _b.call(_a, (acc, curr) => {
                    acc[curr.sub_type] = curr.name;
                    return acc;
                }, {});
                const locationData = {
                    country: (locationObj === null || locationObj === void 0 ? void 0 : locationObj.country) || "India",
                    city: locationObj === null || locationObj === void 0 ? void 0 : locationObj.city,
                    pincode: `${(_c = action.payload) === null || _c === void 0 ? void 0 : _c.pincode}`, // to  be discuss
                };
                setCookie(COOKIE_KEYS.LOCATION_DATA, locationData, 1);
            }
            state.pincode_details = action.payload;
        },
        setlocality(state, action) {
            var _a, _b;
            let locationObj;
            let cities = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.localities;
            if (Array.isArray(cities) && cities.length > 0) {
                locationObj = cities.reduce((result, it) => {
                    if (it.type === "state") {
                        if (it.meta && it.meta.state_code) {
                            result["state_code"] = it.meta.state_code;
                        }
                        result[it.type] = it.display_name;
                    }
                    else {
                        result[it.type] = it.display_name;
                    }
                    return result;
                }, {});
            }
            const locationData = Object.assign(Object.assign(Object.assign({ country: (locationObj === null || locationObj === void 0 ? void 0 : locationObj.country) || "India", city: locationObj === null || locationObj === void 0 ? void 0 : locationObj.city }, (((_b = action.payload) === null || _b === void 0 ? void 0 : _b.locality) === "pincode"
                ? { pincode: action.payload.localityValue }
                : {})), (locationObj.state
                ? {
                    state: locationObj.state,
                }
                : {})), (locationObj.state_code
                ? {
                    state_code: locationObj.state_code,
                }
                : {}));
            setCookie(COOKIE_KEYS.LOCATION_DATA, locationData, 1);
            state.pincode_details = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //countires
            .addCase(fetchAllCountries.pending, (state) => {
            state.countries = {
                loading: true,
            };
        })
            .addCase(fetchAllCountries.fulfilled, (state, action) => {
            state.countries = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchAllCountries.rejected, (state, action) => {
            state.countries = Object.assign({}, { error: action.error, loading: false });
        })
            //product tat
            .addCase(getTatProduct.pending, (state) => {
            state.product_tat = {
                loading: true,
            };
        })
            .addCase(getTatProduct.fulfilled, (state, action) => {
            state.product_tat = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getTatProduct.rejected, (state, action) => {
            state.product_tat = Object.assign({}, { error: action.error, loading: false });
        })
            //pincode details
            .addCase(fetchPincodeDetails.pending, (state) => {
            state.pincode_details = {
                loading: true,
            };
        })
            .addCase(fetchPincodeDetails.fulfilled, (state, action) => {
            state.pincode_details = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchPincodeDetails.rejected, (state, action) => {
            state.pincode_details = Object.assign({}, { error: action.error, loading: false });
        });
    },
});
export const logisticsReducer = logisticSlice.reducer;
export const { setallCountries, setpincodeDetails, setlocality } = logisticSlice.actions;
//# sourceMappingURL=logistic.js.map