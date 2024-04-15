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
    address: {},
    address_item: {},
};
export const fetchAddress = createAsyncThunk("address", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchAddressById = createAsyncThunk("addressItem", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const deleteAddress = createAsyncThunk("deleteAddress", (params, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const updateAddress = createAsyncThunk("updateAddress", (params, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return params;
    }
    catch (error) {
        return rejectWithValue(error);
    }
}));
export const addAddress = createAsyncThunk("addAddress", (params, { extra, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return params;
    }
    catch (error) {
        return rejectWithValue(error);
    }
}));
const addressSlice = createSlice({
    name: STORE_KEYS.ADDRESS,
    initialState,
    reducers: {
    // setAddressItem(state, { payload }) {
    //     const { data, error } = payload;
    //     if (error) {
    //         state.address_item = {
    //             ...state.address_item,
    //             error
    //         }
    //     } else {
    //         state.address_item = {
    //             ...data,
    //             error: null
    //         }
    //     }
    // }
    },
    extraReducers: (builder) => {
        builder
            // get address
            .addCase(fetchAddress.pending, (state) => {
            state.address.loading = {
                loading: true,
            };
        })
            .addCase(fetchAddress.fulfilled, (state, action) => {
            state.address = Object.assign(Object.assign({}, action === null || action === void 0 ? void 0 : action.payload), { error: null, loading: false });
        })
            .addCase(fetchAddress.rejected, (state, action) => {
            state.address = Object.assign({}, { error: action.error, loading: false });
        })
            // get address item
            .addCase(fetchAddressById.pending, (state) => {
            state.address_item = {
                loading: true,
            };
        })
            .addCase(fetchAddressById.fulfilled, (state, action) => {
            state.address_item = Object.assign(Object.assign({}, action === null || action === void 0 ? void 0 : action.payload), { error: null, loading: false });
        })
            .addCase(fetchAddressById.rejected, (state, action) => {
            state.address_item = Object.assign({}, { error: action.error, loading: false });
        })
            // add address item
            .addCase(addAddress.pending, (state) => {
            state.address_item = {
                loading: true,
            };
        })
            .addCase(addAddress.fulfilled, (state, action) => {
            state.address_item = Object.assign(Object.assign({}, action === null || action === void 0 ? void 0 : action.payload), { error: null, loading: false });
        })
            .addCase(addAddress.rejected, (state, action) => {
            state.address_item = Object.assign({}, { error: action.error, loading: false });
        })
            // get address item
            .addCase(updateAddress.pending, (state) => {
            state.address_item = {
                loading: true,
            };
        })
            .addCase(updateAddress.fulfilled, (state, action) => {
            state.address_item = Object.assign(Object.assign({}, action === null || action === void 0 ? void 0 : action.payload), { error: null, loading: false });
        })
            .addCase(updateAddress.rejected, (state, action) => {
            state.address_item = Object.assign({}, { error: action.error, loading: false });
        });
    },
});
export const addressReducer = addressSlice.reducer;
// export const { setAddressItem } = addressSlice.actions;
//# sourceMappingURL=address.js.map