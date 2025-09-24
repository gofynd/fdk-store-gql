import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    brands: {},
    brand: {},
};
const brandsSlice = createSlice({
    name: STORE_KEYS.BRANDS,
    initialState,
    reducers: {
        setBrands(state, action) {
            state.brands = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(`${STORE_KEYS.BRANDS}/setData`, (state, action) => {
            Object.assign(state, action.payload);
        });
    },
});
export const brandsReducer = brandsSlice.reducer;
export const { setBrands } = brandsSlice.actions;
//# sourceMappingURL=brands.js.map