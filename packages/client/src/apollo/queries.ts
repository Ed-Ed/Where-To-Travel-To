import { gql } from '@apollo/client';

gql`
  query GetWeatherOptions {
    getWeatherOptions {
      label
    }
  }
`;

gql`
  query GetActivityOptions {
    getActivityOptions {
      label
    }
  }
`;
