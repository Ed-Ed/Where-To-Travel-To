import { initializeApollo } from '../apollo/apollo';
import {
  GetWeatherOptionsDocument,
  GetActivityOptionsDocument,
} from '../ __generated__/types';
import { ActivityOptions } from '../components/Options/Activity';
import { Title } from '../components/Title';
import { PageContainer } from '../components/Layout/PageContainer';
const Home: React.FC = () => {
  return (
    <PageContainer>
      <Title />

      <ActivityOptions />
    </PageContainer>
  );
};

export async function getServerSideProps() {
  // TODO find better way?
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
