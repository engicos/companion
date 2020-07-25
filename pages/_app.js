import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { CookiesProvider, useCookies } from "react-cookie";
import withData from "../utils/apollo";
import "../styles/global.scss";

import Layout from "../components/common/Layout";

const App = ({ Component, pageProps, apollo }) => {
  const [cookies, setCookie] = useCookies('user')

  return (
    <CookiesProvider>
    <ApolloProvider client={apollo}>
      <Layout>
        <Head>
          <title>Companion</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        {JSON.stringify(cookies.user)}
      </Layout>
    </ApolloProvider>
    </CookiesProvider>
  );
};

// Wraps all components in the tree with the data provider
export default withData(App);
