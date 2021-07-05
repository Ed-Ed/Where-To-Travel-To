import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getWeatherOptions: Array<Option>;
  getActivityOptions: Array<Option>;
};

export type GetWeatherOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWeatherOptionsQuery = (
  { __typename?: 'Query' }
  & { getWeatherOptions: Array<(
    { __typename?: 'Option' }
    & Pick<Option, 'id' | 'label'>
  )> }
);

export type GetActivityOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActivityOptionsQuery = (
  { __typename?: 'Query' }
  & { getActivityOptions: Array<(
    { __typename?: 'Option' }
    & Pick<Option, 'id' | 'label'>
  )> }
);


export const GetWeatherOptionsDocument = gql`
    query GetWeatherOptions {
  getWeatherOptions {
    id
    label
  }
}
    `;

/**
 * __useGetWeatherOptionsQuery__
 *
 * To run a query within a React component, call `useGetWeatherOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWeatherOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWeatherOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWeatherOptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetWeatherOptionsQuery, GetWeatherOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWeatherOptionsQuery, GetWeatherOptionsQueryVariables>(GetWeatherOptionsDocument, options);
      }
export function useGetWeatherOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWeatherOptionsQuery, GetWeatherOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWeatherOptionsQuery, GetWeatherOptionsQueryVariables>(GetWeatherOptionsDocument, options);
        }
export type GetWeatherOptionsQueryHookResult = ReturnType<typeof useGetWeatherOptionsQuery>;
export type GetWeatherOptionsLazyQueryHookResult = ReturnType<typeof useGetWeatherOptionsLazyQuery>;
export type GetWeatherOptionsQueryResult = Apollo.QueryResult<GetWeatherOptionsQuery, GetWeatherOptionsQueryVariables>;
export const GetActivityOptionsDocument = gql`
    query GetActivityOptions {
  getActivityOptions {
    id
    label
  }
}
    `;

/**
 * __useGetActivityOptionsQuery__
 *
 * To run a query within a React component, call `useGetActivityOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivityOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivityOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActivityOptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetActivityOptionsQuery, GetActivityOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivityOptionsQuery, GetActivityOptionsQueryVariables>(GetActivityOptionsDocument, options);
      }
export function useGetActivityOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivityOptionsQuery, GetActivityOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivityOptionsQuery, GetActivityOptionsQueryVariables>(GetActivityOptionsDocument, options);
        }
export type GetActivityOptionsQueryHookResult = ReturnType<typeof useGetActivityOptionsQuery>;
export type GetActivityOptionsLazyQueryHookResult = ReturnType<typeof useGetActivityOptionsLazyQuery>;
export type GetActivityOptionsQueryResult = Apollo.QueryResult<GetActivityOptionsQuery, GetActivityOptionsQueryVariables>;