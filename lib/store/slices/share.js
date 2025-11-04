import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {};
const shareSlice = createSlice({
    name: STORE_KEYS.SHARE,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(`${STORE_KEYS.SHARE}/setData`, (state, action) => {
            Object.assign(state, action.payload);
        });
    },
});
export const shareReducer = shareSlice.reducer;
//# sourceMappingURL=share.js.map