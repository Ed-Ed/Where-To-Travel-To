import { QueryResolvers } from '../__generated__/graphql';
import weatherChoices from '../services/weather';
import activityChoices from '../services/activity';

const queryResolvers: QueryResolvers = {
  getWeatherOptions: () => weatherChoices,
  getActivityOptions: () => activityChoices,
};

export default queryResolvers;
