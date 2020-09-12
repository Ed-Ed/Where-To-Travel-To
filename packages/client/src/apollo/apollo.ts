import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (
  initialState: any = null
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export const useApollo = (initialState: any) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
};
