import { setfaqsByCategory } from "../../store/slices/content";
export function faqsByCategoryHandler(faqsByCategory, dispatch) {
    if (faqsByCategory) {
        dispatch(setfaqsByCategory(faqsByCategory));
    }
}
//# sourceMappingURL=faqsByCategory.handler.js.map