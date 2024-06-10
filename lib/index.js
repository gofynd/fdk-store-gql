import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';
import ApplicationStore from './store';
class FPIClient {
    constructor(opts) {
        const { applicationID, applicationToken, domain, storeInitialData = {} } = opts;
        const link = new HttpLink({
            uri: `${domain}/service/webhooks/graphql/`,
            headers: {
                'x-application-id': applicationID,
                'x-application-token': applicationToken,
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