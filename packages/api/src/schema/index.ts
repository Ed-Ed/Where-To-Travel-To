import { makeExecutableSchema } from "graphql-tools";

import resolvers from "../resolvers";
import types from "./types.graphql";

export default makeExecutableSchema({
  typeDefs: types,
  resolvers: resolvers,
});
