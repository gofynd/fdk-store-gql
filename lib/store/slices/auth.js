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
    logged_in: false,
    platform_data: {},
    user_data: {},
    user_fetched: false,
};
export const fetchPlatformData = createAsyncThunk("platformData", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const loginWithAppleIOS = createAsyncThunk("loginWithAppleIOS", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const hasPassword = createAsyncThunk("hasPassword", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const getListOfActiveSessions = createAsyncThunk("getListOfActiveSessions", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const deleteMobileNumber = createAsyncThunk("deleteMobileNumber", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const deleteEmail = createAsyncThunk("deleteEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const addMobileNumber = createAsyncThunk("addMobileNumber", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const addEmail = createAsyncThunk("addEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchUserData = createAsyncThunk("fetchUserData", (params, { extra, getState }) => __awaiter(void 0, void 0, void 0, function* () {
    const currentState = getState();
    //const { sdk } = extra;
    if (currentState.auth.user_fetched && currentState.auth.logged_in) {
        return currentState.auth.user_data;
    }
    return params;
}));
export const deleteUser = createAsyncThunk("deleteUser", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const signOutUser = createAsyncThunk("signOutUser", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const signUpUser = createAsyncThunk("signUpUser", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const signInUserWithPassword = createAsyncThunk("signInUserWithPassword", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const signInUserWithOtp = createAsyncThunk("signInUserWithOtp", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const sendOtp = createAsyncThunk("sendOtp", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const forgotPassword = createAsyncThunk("forgotPassword", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const facebookLogin = createAsyncThunk("facebookLogin", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const googleLogin = createAsyncThunk("googleLogin", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const resetPasswordWithEmail = createAsyncThunk("resetPasswordWithEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const resetPasswordWithMobile = createAsyncThunk("resetPasswordWithMobile", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const sendOtpMobile = createAsyncThunk("sendOtpMobile", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const sendOtpEmail = createAsyncThunk("sendOtpEmail", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const verifyMobileOtp = createAsyncThunk("verifyMobileOtp", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const verifyEmailOtp = createAsyncThunk("verifyEmailOtp", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const updateProfile = createAsyncThunk("updateProfile", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const sendEmailVerificationLink = createAsyncThunk("sendEmailVerificationLink", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
const authSlice = createSlice({
    name: STORE_KEYS.AUTH,
    initialState,
    reducers: {
        setUserData(state, action) {
            state.user_data = action.payload;
            state.logged_in = true;
            state.user_fetched = true;
        },
        setplatformConfig(state, action) {
            state.platform_data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlatformData.pending, (state) => {
            state.platform_data = {
                loading: true,
            };
        })
            .addCase(fetchPlatformData.fulfilled, (state, action) => {
            state.platform_data = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchPlatformData.rejected, (state, action) => {
            state.platform_data = Object.assign({}, { error: action.error, loading: false });
        })
            .addCase(fetchUserData.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(fetchUserData.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            //loginWithAppleIOS
            .addCase(loginWithAppleIOS.pending, (state) => {
            return state;
        })
            .addCase(loginWithAppleIOS.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(loginWithAppleIOS.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(signInUserWithPassword.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(signInUserWithPassword.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(signInUserWithOtp.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(signInUserWithOtp.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(facebookLogin.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(facebookLogin.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(googleLogin.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(googleLogin.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(verifyMobileOtp.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(verifyMobileOtp.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(verifyEmailOtp.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(verifyEmailOtp.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(updateProfile.fulfilled, (state, action) => {
            state.logged_in = true;
            state.user_fetched = true;
            state.user_data = action.payload;
        })
            .addCase(updateProfile.rejected, (state, action) => {
            state.logged_in = false;
            state.user_fetched = true;
            state.user_data = {};
        })
            .addCase(signOutUser.fulfilled, (state, action) => {
            state.logged_in = false;
            state.user_fetched = false;
            state.user_data = {};
        });
    },
});
export const authReducer = authSlice.reducer;
export const { setUserData, setplatformConfig } = authSlice.actions;
//# sourceMappingURL=auth.js.map