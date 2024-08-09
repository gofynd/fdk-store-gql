import { Theme } from "./graphql";
export type CustomPayload = {
    key: string;
    value: any;
};
export type CustomSlice = Record<string, any>;
export type GraphQLResponse = {
    data: {
        theme?: Theme;
    };
    errors?: unknown;
};
