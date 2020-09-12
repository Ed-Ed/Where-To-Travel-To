import Test from "../components/Test";
import { initializeApollo } from "../apollo/apollo";
import { TestDocument } from "../ __generated__/types";

const Home: React.FC = () => {
  return (
    <>
      <h1>NextJS GraphQL Apollo App</h1>
      <Test />
    </>
  );
};

export async function getServerSideProps() {
  // I really don't think this is the best way to do this
  // even though it's what their example shows
  // TODO find better way
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: TestDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Home;
