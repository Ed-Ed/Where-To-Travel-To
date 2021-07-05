import React from 'react';
import { NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from '../apollo/apollo';
import {
  GetWeatherOptionsDocument,
  GetActivityOptionsDocument,
} from '../__generated__/graphql';
import { OptionsQuery, Query } from '../components/Options/OptionsQuery';
import { Title } from '../components/Title';
import { PageContainer } from '../components/Layout/PageContainer';

const Home: React.FC = () => (
  <PageContainer>
    <Title />

    <OptionsQuery title="Activity" query={Query.GET_ACTIVITY_OPTIONS} />

    <OptionsQuery title="Weather" query={Query.GET_WEATHER_OPTIONS} />
  </PageContainer>
);

type GetServerSideProps = {
  props: {
    initialApolloState: NormalizedCacheObject;
  };
};

export async function getServerSideProps(): Promise<GetServerSideProps> {
  // TODO find better way
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetWeatherOptionsDocument,
  });

  await apolloClient.query({
    query: GetActivityOptionsDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Home;
