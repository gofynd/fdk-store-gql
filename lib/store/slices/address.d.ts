import { AddressSlice } from "../../types/address";
import { Address, Addresses, UpdateAddressResponse } from "../../types/graphql";
export declare const addressReducer: import("redux").Reducer<AddressSlice, import("redux").AnyAction>;
export declare const setAddressItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<Address, "address/setAddressItem">, setAddresses: import("@reduxjs/toolkit").ActionCreatorWithPayload<Addresses, "address/setAddresses">, setupdateAddress: import("@reduxjs/toolkit").ActionCreatorWithPayload<UpdateAddressResponse, "address/setupdateAddress">;
