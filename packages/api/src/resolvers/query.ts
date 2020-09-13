import { QueryResolvers } from "../ __generated__/types";
import weatherChoices from "../services/weather";
import activityChoices from "../services/activity";

const queryResolvers: QueryResolvers = {
  getWeatherOptions: () => {
    return weatherChoices;
  },
  getActivityOptions: () => {
    return activityChoices;
  },
};

export default queryResolvers;
