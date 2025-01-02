import { setblog, } from "../../store/slices/content";
export function bloghandler(blog, dispatch) {
    if (blog) {
        dispatch(setblog(blog));
    }
}
//# sourceMappingURL=blog.handler.js.map