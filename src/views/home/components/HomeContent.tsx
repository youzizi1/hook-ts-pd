import * as React from "react";
import Code from "../../../base/code/index";
import styled from "styled-components";

const HomeContentStyle = styled.div`
  width: 100%;
  
  > div:not(:first-of-type) {
    margin-top: 32px;
  }
`;

const HomeContent = () => {
  return (
    <HomeContentStyle>
      <Code />
      <Code />
      <Code />
      <Code />
      <Code />
      <Code />
      <Code />
    </HomeContentStyle>
  );
};

export default HomeContent;
