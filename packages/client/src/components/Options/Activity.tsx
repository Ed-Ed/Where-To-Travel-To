import React from 'react';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useGetActivityOptionsQuery } from '../../ __generated__/types';

const useStyles = makeStyles({
  root: {
    marginRight: '1rem',
  },
});

const ActivityOptions: React.FC = () => {
  const { data, loading, error } = useGetActivityOptionsQuery();

  const classes = useStyles();

  if (error) {
    console.error(error);

    return <>error</>;
  }

  if (loading) {
    console.log('=== activity component loading...', loading, data);

    return <>loading...</>;
  }

  const handleActivityClick = (e) => {
    console.log(e.target);
  };

  if (data) {
    console.log('=== activity component data', loading, data);

    if (data.getActivityOptions.length > 0) {
      return (
        <div>
          {data.getActivityOptions.map((e) => {
            return (
              <Chip
                key={e.label}
                className={classes.root}
                label={e.label}
                clickable
                onClick={handleActivityClick}
              />
            );
          })}
        </div>
      );
    }

    // TODO return some component for no data
    return null;
  }

  return null;
};

export { ActivityOptions };
