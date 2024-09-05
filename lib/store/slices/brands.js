var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    brands: {},
    brand: {}
};
export const fetchBrands = createAsyncThunk("brands", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchBrand = createAsyncThunk("brand", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
const brandsSlice = createSlice({
    name: STORE_KEYS.BRANDS,
    initialState,
    reducers: {
        setBrands(state, action) {
            state.brands = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
            state.brands = {
                loading: true,
            };
        })
            .addCase(fetchBrands.fulfilled, (state, action) => {
            state.brands = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchBrands.rejected, (state, action) => {
            state.brands = Object.assign({}, { error: action === null || action === void 0 ? void 0 : action.error, loading: false });
        })
            .addCase(fetchBrand.fulfilled, (state, action) => {
            state.brand = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        });
    },
});
export const brandsReducer = brandsSlice.reducer;
export const { setBrands } = brandsSlice.actions;
//# sourceMappingURL=brands.js.map