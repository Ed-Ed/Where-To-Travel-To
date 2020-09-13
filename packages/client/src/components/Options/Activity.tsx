import React from "react";

import { useGetActivityOptionsQuery } from "../../ __generated__/types";

const ActivityOptions: React.FC = () => {
  const { data, loading, error } = useGetActivityOptionsQuery();

  if (error) {
    console.error(error);

    return <>error</>;
  }

  if (loading) {
    console.log("=== activity component loading...", loading, data);
    return <>loading...</>;
  }

  if (data) {
    console.log("=== activity component data", loading, data);

    if (data.getActivityOptions.length > 0) {
      return (
        <>
          {data.getActivityOptions.map((e) => {
            return <p key={e.label}>{e.label}</p>;
          })}
        </>
      );
    }

    // TODO return some component for no data
    return null;
  }

  return null;
};

export default ActivityOptions;
