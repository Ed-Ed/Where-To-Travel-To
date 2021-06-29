import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () => new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

export const initializeApollo = (
  initialState: NormalizedCacheObject = null,
): ApolloClient<NormalizedCacheObject> => {
  const thisApolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    thisApolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') {
    return thisApolloClient;
  }

  if (!apolloClient) {
    apolloClient = thisApolloClient;
  }

  return thisApolloClient;
};

export const useApollo = (initialState: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
};
