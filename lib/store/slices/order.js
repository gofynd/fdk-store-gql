import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {};
const orderSlice = createSlice({
    name: STORE_KEYS.ORDER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(`${STORE_KEYS.ORDER}/setData`, (state, action) => {
            Object.assign(state, action.payload);
        });
    },
});
export const orderReducer = orderSlice.reducer;
//# sourceMappingURL=order.js.map