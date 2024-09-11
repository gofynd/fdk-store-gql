import ApplicationStore from './store';
class FPIClient {
    constructor(opts) {
        const { applicationID, applicationToken, domain: themeDomain, storeInitialData = {} } = opts;
        const concatenatedString = `${applicationID}:${applicationToken}`;
        const encodedString = self.btoa.call(globalThis, concatenatedString);
        const authorizationHeader = `Bearer ${encodedString}`;
        const domain = themeDomain;
        this.client = new ApplicationStore(storeInitialData, authorizationHeader, domain);
    }
}
export default FPIClient;
//# sourceMappingURL=index.js.map