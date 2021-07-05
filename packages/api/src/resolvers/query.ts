import { QueryResolvers } from '../__generated__/graphql';
import { weatherOptions } from '../services/weather';
import { activityOptions } from '../services/activity';

const queryResolvers: QueryResolvers = {
  getWeatherOptions: () => weatherOptions,
  getActivityOptions: () => activityOptions,
};

export default queryResolvers;
