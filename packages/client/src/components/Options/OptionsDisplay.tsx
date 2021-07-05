import React from 'react';
import { Chip, makeStyles } from '@material-ui/core';
import { Option } from '../../__generated__/graphql';
import { useSelectedOptions } from '../../providers/SelectedOptions';

const useStyles = makeStyles({
  root: {
    marginRight: '1rem',
  },
});

type Props = {
  error: unknown;
  loading: boolean;
  options: Option[];
};

const OptionsDisplay: React.FC<Props> = ({ error, loading, options }) => {
  const classes = useStyles();

  const { selectedOptions, addOption, removeOption } = useSelectedOptions();

  if (error) {
    console.error(error);

    return <>error</>;
  }

  if (loading) {
    return <>loading...</>;
  }

  const handleOptionClick = (isSelected: boolean, optionId: string) => {
    if (isSelected) {
      removeOption(optionId);
    } else {
      addOption(optionId);
    }
  };

  if (options?.length > 0) {
    return (
      <div>
        {options.map(option => {
          const isSelected = selectedOptions.includes(option.id);

          return (
            <Chip
              key={option.label}
              className={classes.root}
              label={option.label}
              clickable
              onClick={() => handleOptionClick(isSelected, option.id)}
              color={isSelected ? 'secondary' : 'primary'}
            />
          );
        })}
      </div>
    );
  }

  return null;
};

export { OptionsDisplay };
