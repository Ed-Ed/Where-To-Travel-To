import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { useApollo } from '../apollo/apollo';
import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const client = useApollo(pageProps.initialApolloState);

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Hello World</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <CssBaseline />

          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
