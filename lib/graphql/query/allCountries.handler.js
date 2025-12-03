import { setallCountries } from "../../store/slices/logistic";
import { conditionalStoreDispatch } from "../../store/utils/util";
const themeMap = {};
export function allCountrieshandler(allCountries, dispatch, options) {
    if (allCountries) {
        conditionalStoreDispatch(dispatch, setallCountries, allCountries, options);
    }
}
//# sourceMappingURL=allCountries.handler.js.map