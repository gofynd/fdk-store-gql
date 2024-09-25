import { setCategories } from "../../store/slices/categories";
const themeMap = {};
export function categoriesHandler(categories, dispatch) {
    if (categories) {
        dispatch(setCategories(categories));
    }
}
//# sourceMappingURL=categories.handler.js.map