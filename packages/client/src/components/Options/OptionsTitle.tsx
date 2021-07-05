import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';

type Props = {
  title: string;
};

const OptionsTitle: React.FC<Props> = ({ title }) => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Typography
      variant={matches ? 'h3' : 'h5'}
      component="h3"
      align="center"
      gutterBottom>
      {title}
    </Typography>
  );
};

export { OptionsTitle };
