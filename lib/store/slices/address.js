import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    address: {},
    address_item: {},
};
const addressSlice = createSlice({
    name: STORE_KEYS.ADDRESS,
    initialState,
    reducers: {
        setAddressItem(state, action) {
            state.address_item = action.payload;
        },
        setAddresses(state, action) {
            state.address = action.payload;
        },
        setupdateAddress(state, action) {
            state.address_item = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(`${STORE_KEYS.ADDRESS}/setData`, (state, action) => {
            Object.assign(state, action.payload);
        });
    },
});
export const addressReducer = addressSlice.reducer;
export const { setAddressItem, setAddresses, setupdateAddress } = addressSlice.actions;
//# sourceMappingURL=address.js.map