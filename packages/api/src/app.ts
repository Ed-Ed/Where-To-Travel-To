import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';

const server = new ApolloServer({
  schema,
});

const app = express();
const port = 5000;
const path = '/graphql';

server.applyMiddleware({ app, path });

app.listen(port, () => {
  console.log(`Express GraphQL server listening on port ${port}`);
});
