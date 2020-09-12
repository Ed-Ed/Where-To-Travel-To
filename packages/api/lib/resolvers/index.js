"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _query = _interopRequireDefault(require("./query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = {
  Query: _query.default
};
var _default = resolvers;
exports.default = _default;