var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    logged_in: null,
    platform_data: {},
    user_data: {},
    user_fetched: null,
};
const authSlice = createSlice({
    name: STORE_KEYS.AUTH,
    initialState,
    reducers: {
        setUserData(state, action) {
            const _a = action.payload, { isUserLogin = false } = _a, userState = __rest(_a, ["isUserLogin"]);
            state.logged_in = isUserLogin || userState.user_exists || false;
            state.user_fetched = userState.user_exists;
            state.user_data = userState;
        },
        setplatformConfig(state, action) {
            state.platform_data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(`${STORE_KEYS.AUTH}/setData`, (state, action) => {
            Object.assign(state, action.payload);
        });
    },
});
export const authReducer = authSlice.reducer;
export const { setUserData, setplatformConfig } = authSlice.actions;
//# sourceMappingURL=auth.js.map