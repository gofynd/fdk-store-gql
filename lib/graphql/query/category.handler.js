import { setCategory } from "../../store/slices/category";
const themeMap = {};
export function categoryHandler(category, dispatch) {
    if (category) {
        dispatch(setCategory(category));
    }
}
//# sourceMappingURL=category.handler.js.map