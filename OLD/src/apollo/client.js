import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
 	uri: process.env.GATSBY_WPGRAPHQL_ENDPOINT,
    fetch,
});

export default client;
