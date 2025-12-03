import { setCategories } from "../../store/slices/categories";
import { conditionalStoreDispatch } from "../../store/utils/util";
const themeMap = {};
export function categoriesHandler(categories, dispatch, options) {
    if (categories) {
        conditionalStoreDispatch(dispatch, setCategories, categories, options);
    }
}
//# sourceMappingURL=categories.handler.js.map