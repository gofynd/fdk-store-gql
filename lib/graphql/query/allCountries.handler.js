import { setallCountries } from "../../store/slices/logistic";
const themeMap = {};
export function allCountrieshandler(allCountries, dispatch) {
    if (allCountries) {
        dispatch(setallCountries(allCountries));
    }
}
//# sourceMappingURL=allCountries.handler.js.map