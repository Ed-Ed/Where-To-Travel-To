import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';

const Title: React.FC = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Typography variant={matches ? 'h1' : 'h4'} component="h1" align="center">
      Where To Travel To?
    </Typography>
  );
};

export { Title };
