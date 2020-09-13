import { initializeApollo } from "../apollo/apollo";
import {
  GetWeatherOptionsDocument,
  GetActivityOptionsDocument,
} from "../ __generated__/types";
import ActivityOptions from "../components/Options/Activity";

const Home: React.FC = () => {
  return (
    <>
      <h1>NextJS GraphQL Apollo App</h1>
      <ActivityOptions />
    </>
  );
};

export async function getServerSideProps() {
  // I really don't think this is the best way to do this
  // even though it's what their example shows
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
