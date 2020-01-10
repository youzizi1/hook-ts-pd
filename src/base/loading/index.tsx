import * as React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Loading = () => {
  return (
    <LoadingStyle>
      <Spin size="large" />
    </LoadingStyle>
  );
};

export default Loading;
