import { collectUnemittedEvents, emitAllEvents, FPI_EVENTS, } from "./helpers/FPI-events";
import ApplicationStore from "./store";
class FPIClient {
    constructor(opts) {
        var _a;
        const { applicationID, applicationToken, domain: themeDomain, storeInitialData = {}, orderingSource = '' } = opts;
        const concatenatedString = `${applicationID}:${applicationToken}`;
        const encodedString = self.btoa.call(globalThis, concatenatedString);
        const authorizationHeader = `Bearer ${encodedString}`;
        const domain = themeDomain;
        const customData = (_a = storeInitialData === null || storeInitialData === void 0 ? void 0 : storeInitialData.custom) !== null && _a !== void 0 ? _a : {};
        const events = collectUnemittedEvents(customData);
        emitAllEvents(events, FPI_EVENTS, storeInitialData);
        this.client = new ApplicationStore(storeInitialData, authorizationHeader, domain, orderingSource);
    }
}
export default FPIClient;
//# sourceMappingURL=index.js.map