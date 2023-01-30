import React from "react";
import styled from "styled-components";

const MaxWidth = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return (
    <MaxWidth>
      <div style={{ padding: "0 20px" }}>{children}</div>
    </MaxWidth>
  );
};

export default Container;
