import "../styles/globals.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../apollo/apollo";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@edwardandrewb/elements";

const theme = createTheme();

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <title>Hello World</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
1;
export default App;
