"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphqlTools = require("graphql-tools");

var _resolvers = _interopRequireDefault(require("../resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = "type Query {\r\n  test: String\r\n}\r\n";

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: types,
  resolvers: _resolvers.default
});

exports.default = _default;