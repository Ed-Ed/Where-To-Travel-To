import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  useGetActivityOptionsQuery,
  useGetWeatherOptionsQuery,
} from '../../__generated__/graphql';
import { OptionsTitle } from './OptionsTitle';
import { OptionsDisplay } from './OptionsDisplay';

enum Query {
  GET_ACTIVITY_OPTIONS = 'getActivityOptions',
  GET_WEATHER_OPTIONS = 'getWeatherOptions',
}

const QueryMap = {
  [Query.GET_ACTIVITY_OPTIONS]: useGetActivityOptionsQuery,
  [Query.GET_WEATHER_OPTIONS]: useGetWeatherOptionsQuery,
};

const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

type Props = {
  title: string;
  query: Query;
};

const OptionsQuery: React.FC<Props> = ({ title, query }) => {
  const classes = useStyles();

  const { data, loading, error } = QueryMap[query]();

  return (
    <div className={classes.root}>
      <OptionsTitle title={title} />

      <OptionsDisplay error={error} loading={loading} options={data?.[query]} />
    </div>
  );
};

export { OptionsQuery, Query };
