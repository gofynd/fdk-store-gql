import type { ThunkActionDispatch } from "redux-thunk";
import { Theme } from "../../types/graphql";
export declare class ThemeModule {
    private dispatch;
    constructor(dispatch: ThunkActionDispatch<any>);
    dragSection(params: {
        index: number;
        newIndex: number;
    }): any;
    addSection(params?: any): any;
    removeSection(params?: any): any;
    updateSection(params?: any): any;
    setTheme(params: any): any;
    setGlobalConfig(params: any): any;
    private appliedThemeGraphQLhandler;
    handleThemeResponse(response: Theme): void;
}
