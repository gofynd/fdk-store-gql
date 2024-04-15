import ApplicationStore from './store';
import { ApolloClient, InMemoryCache } from '@apollo/client';
class FPIClient {
    constructor(opts) {
        const { applicationID, applicationToken, domain, storeInitialData = {} } = opts;
        const gqClient = new ApolloClient({
            uri: `${domain}/service/webhooks/graphql/`,
            cache: new InMemoryCache(),
            headers: {
                'x-application-id': applicationID,
                'x-application-token': applicationToken,
            },
        });
        this.client = new ApplicationStore(storeInitialData, gqClient);
    }
}
export default FPIClient;
//# sourceMappingURL=index.js.map