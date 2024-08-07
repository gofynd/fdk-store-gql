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
    collection: {},
    item: {},
};
export const fetchCollection = createAsyncThunk("collection", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchCollectionItem = createAsyncThunk("ItemsBySlug", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
const collectionSlice = createSlice({
    name: STORE_KEYS.COLLECTION,
    initialState,
    reducers: {
        setcollection(state, action) {
            state.collection = action.payload;
        },
        setcollectionItems(state, action) {
            state.item = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollection.pending, (state) => {
            state.collection = {
                loading: true,
            };
        })
            .addCase(fetchCollection.fulfilled, (state, action) => {
            state.collection = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCollection.rejected, (state, action) => {
            state.collection = Object.assign({}, { error: action.error, loading: false });
        })
            //fetchItem
            .addCase(fetchCollectionItem.pending, (state) => {
            state.item = {
                loading: false,
            };
        })
            .addCase(fetchCollectionItem.fulfilled, (state, action) => {
            state.item = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCollectionItem.rejected, (state, action) => {
            state.item = Object.assign({}, { error: action.error, loading: false });
        });
    },
});
export const collectionReducer = collectionSlice.reducer;
export const { setcollection, setcollectionItems } = collectionSlice.actions;
//# sourceMappingURL=collection.js.map