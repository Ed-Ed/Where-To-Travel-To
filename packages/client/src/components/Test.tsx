import React from "react";
import styled from "styled-components";
import { Button } from "@edwardandrewb/elements";

import { useTestQuery } from "../ __generated__/types";

const StyledP = styled.p`
  color: red;
`;

const Test: React.FC = () => {
  const { data, loading, error } = useTestQuery();

  if (error) {
    console.error(error);

    return <StyledP>error</StyledP>;
  }

  if (loading) {
    console.log("=== test component loading...", loading, data);
    return <StyledP>loading...</StyledP>;
  }

  if (data) {
    console.log("=== test component data", loading, data);

    return <Button>success</Button>;
  }

  return null;
};

export default Test;
