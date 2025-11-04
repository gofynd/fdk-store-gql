import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    brand: {},
};
const brandSlice = createSlice({
    name: STORE_KEYS.BRAND,
    initialState,
    reducers: {
        setBrand(state, action) {
            state.brand = action.payload;
        },
    },
});
export const brandReducer = brandSlice.reducer;
export const { setBrand } = brandSlice.actions;
//# sourceMappingURL=brand.js.map