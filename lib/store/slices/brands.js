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
});
export const brandsReducer = brandsSlice.reducer;
export const { setBrands } = brandsSlice.actions;
//# sourceMappingURL=brands.js.map