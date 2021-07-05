import { gql } from '@apollo/client';

gql`
  query GetWeatherOptions {
    getWeatherOptions {
      id
      label
    }
  }
`;

gql`
  query GetActivityOptions {
    getActivityOptions {
      id
      label
    }
  }
`;
