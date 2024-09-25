import { setapplicationStaff } from "../../store/slices/configuration";
export function applicationStaffHandler(applicationStaff, dispatch) {
    if (applicationStaff) {
        dispatch(setapplicationStaff(applicationStaff));
    }
}
//# sourceMappingURL=applicationStaff.handler.js.map