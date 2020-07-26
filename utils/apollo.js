import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { Cookies } from   'react-cookie';
import { setContext } from 'apollo-link-context';

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const cookies = new Cookies()

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL + "/graphql"
});

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = cookies.jwt

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) => {
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {}),
    })
  }
);
