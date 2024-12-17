import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    collection: {},
    item: {},
    collections: {},
};
const collectionSlice = createSlice({
    name: STORE_KEYS.COLLECTION,
    initialState,
    reducers: {
        setcollection(state, action) {
            state.collection = action.payload;
        },
        setcollectionItems(state, action) {
            state.item = action.payload;
        },
        setcollections(state, action) {
            state.collections = action.payload;
        },
    }
});
export const collectionReducer = collectionSlice.reducer;
export const { setcollection, setcollectionItems, setcollections } = collectionSlice.actions;
//# sourceMappingURL=collection.js.map