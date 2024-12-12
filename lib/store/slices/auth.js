import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    logged_in: false,
    platform_data: {},
    user_data: {},
    user_fetched: false,
};
const authSlice = createSlice({
    name: STORE_KEYS.AUTH,
    initialState,
    reducers: {
        setUserData(state, action) {
            state.logged_in = true;
            state.user_fetched = true;
            if ('isUserLogin' in action.payload && action.payload.isUserLogin === false) {
                state.logged_in = false;
                state.user_fetched = false;
            }
            const userData = Object.assign({}, action.payload);
            if ('isUserLogin' in userData) {
                delete userData.isUserLogin;
            }
            state.user_data = userData;
        },
        setplatformConfig(state, action) {
            state.platform_data = action.payload;
        },
    },
});
export const authReducer = authSlice.reducer;
export const { setUserData, setplatformConfig } = authSlice.actions;
//# sourceMappingURL=auth.js.map