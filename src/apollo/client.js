import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
 	uri: 'https://javascripting.uk/jsgraphql/graphql',
    fetch,
});

export default client;
