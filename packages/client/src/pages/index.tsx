import React from 'react';
import { NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from '../apollo/apollo';
import {
  GetWeatherOptionsDocument,
  GetActivityOptionsDocument,
} from '../__generated__/graphql';
import { ActivityOptions } from '../components/Options/Activity';
import { Title } from '../components/Title';
import { PageContainer } from '../components/Layout/PageContainer';

const Home: React.FC = () => (
  <PageContainer>
    <Title />

    <ActivityOptions />
  </PageContainer>
);

type GetServerSideProps = {
  props: {
    initialApolloState: NormalizedCacheObject;
  }
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
