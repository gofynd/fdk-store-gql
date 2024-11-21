import { LogisticSlice } from "../../types/logistic";
import { CountryList } from "../../types/graphql";
export declare const logisticsReducer: import("redux").Reducer<LogisticSlice, import("redux").AnyAction>;
export declare const setallCountries: import("@reduxjs/toolkit").ActionCreatorWithPayload<CountryList, "logistic/setallCountries">, setpincodeDetails: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "logistic/setpincodeDetails">, setlocality: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "logistic/setlocality">;
