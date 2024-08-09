import { setcompareWithFrequentlyCompared } from "../../store/slices/product";
export function compareWithFrequentlyComparedHandler(compareWithFrequentlyCompared, dispatch) {
    if (compareWithFrequentlyCompared) {
        dispatch(setcompareWithFrequentlyCompared(compareWithFrequentlyCompared));
    }
}
//# sourceMappingURL=compareWithFrequentlyCompared.handler.js.map