import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';
import ApplicationStore from './store';
class FPIClient {
    constructor(opts) {
        const { applicationID, applicationToken, domain, storeInitialData = {} } = opts;
        // Use self.btoa for base64 encoding in the browser
        const concatenatedString = `${applicationID}:${applicationToken}`;
        const encodedString = self.btoa.call(globalThis, concatenatedString);
        const authorizationHeader = `Bearer ${encodedString}`;
        const link = new HttpLink({
            uri: `${domain}/service/application/graphql/`,
            headers: {
                'authorization': authorizationHeader,
            },
            credentials: 'include',
            fetch,
        });
        const gqClient = new ApolloClient({
            link,
            cache: new InMemoryCache(),
        });
        this.client = new ApplicationStore(storeInitialData, gqClient);
    }
}
export default FPIClient;
//# sourceMappingURL=index.js.map