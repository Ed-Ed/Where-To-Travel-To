import "../styles/globals.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../apollo/apollo";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <title>Hello World</title>
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default App;
