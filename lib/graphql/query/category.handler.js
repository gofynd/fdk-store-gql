import { setCategory } from "../../store/slices/category";
import { conditionalStoreDispatch } from "../../store/utils/util";
const themeMap = {};
export function categoryHandler(category, dispatch, options) {
    if (category) {
        conditionalStoreDispatch(dispatch, setCategory, category, options);
    }
}
//# sourceMappingURL=category.handler.js.map