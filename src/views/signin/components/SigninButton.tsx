import * as React from "react";
import styled from "styled-components";
import { Button } from "antd";

export const SignButtonStyle = styled.div`
  width: 100%;

  .ant-btn {
    font-size: 14px;
    color: #606266;
  }
`;

interface SigninLoginButtonProp {
  loading: boolean;

  login: () => void;
}

const SigninLoginButton = (props: SigninLoginButtonProp) => {
  const { login, loading } = props;

  return (
    <SignButtonStyle>
      <Button block size="large" onClick={login} loading={loading}>
        马上登录
      </Button>
    </SignButtonStyle>
  );
};

export default SigninLoginButton;
