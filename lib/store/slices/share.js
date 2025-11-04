import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {};
const shareSlice = createSlice({
    name: STORE_KEYS.SHARE,
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});
export const shareReducer = shareSlice.reducer;
//# sourceMappingURL=share.js.map