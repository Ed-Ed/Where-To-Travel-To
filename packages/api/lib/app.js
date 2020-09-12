"use strict";

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = new _apolloServerExpress.ApolloServer({
  schema: _schema.default
});
const app = (0, _express.default)();
const port = 5000;
const path = "/graphql";
server.applyMiddleware({
  app: app,
  path: path
});
app.listen(port, () => {
  console.log("Express GraphQL server listening on port ".concat(port));
});