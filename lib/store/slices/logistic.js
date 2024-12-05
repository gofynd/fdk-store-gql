import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../../helpers/utils";
import { STORE_KEYS, COOKIE_KEYS } from "../enums/keys";
const initialState = {
    countries: {},
    product_tat: {},
    pincode_details: {},
};
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
            var _a, _b, _c;
            let locationObj;
            let loactionDataCookie = getCookie(COOKIE_KEYS.LOCATION_DATA);
            if (typeof loactionDataCookie === "string") {
                try {
                    loactionDataCookie = JSON.parse(loactionDataCookie);
                }
                catch (e) {
                    loactionDataCookie = {};
                }
            }
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
            const locationData = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (loactionDataCookie || {})), (((_b = action.payload) === null || _b === void 0 ? void 0 : _b.locality) && ((_c = action.payload) === null || _c === void 0 ? void 0 : _c.localityValue)
                ? { [action.payload.locality]: action.payload.localityValue }
                : {})), { city: locationObj === null || locationObj === void 0 ? void 0 : locationObj.city }), (locationObj.state
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
    }
});
export const logisticsReducer = logisticSlice.reducer;
export const { setallCountries, setpincodeDetails, setlocality } = logisticSlice.actions;
//# sourceMappingURL=logistic.js.map