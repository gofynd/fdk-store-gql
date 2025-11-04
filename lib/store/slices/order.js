import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {};
const orderSlice = createSlice({
    name: STORE_KEYS.ORDER,
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});
export const orderReducer = orderSlice.reducer;
//# sourceMappingURL=order.js.map