import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function registerWithFormHandler(registerWithForm, dispatch, params, oldStore, options) {
    if (registerWithForm) {
        emitFPIEvent(FPI_EVENTS.USER_REGISTER, params, registerWithForm, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=registerWithForm.handler.js.map