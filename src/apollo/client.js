import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.GATSBY_WPGRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
