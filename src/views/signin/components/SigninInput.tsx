import * as React from "react";
import styled from "styled-components";
import { Input } from "antd";

export const SignInputStyle = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;

  .ant-input,
  .ant-input:focus {
    border: none;
    border-bottom: 1px solid #ebeef5;
    box-shadow: none;
  }

  > .send-code {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    > .ant-btn {
      color: #409eff;
      border: none;
    }
  }
`;

interface SigninInputProp {
  username: string;
  password: string;
  changeUsername: (e: React.FormEvent<HTMLInputElement>) => void;
  changePassword: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SigninInput = (props: SigninInputProp) => {
  const { username, password, changeUsername, changePassword } = props;

  return (
    <>
      <SignInputStyle>
        <Input
          size="large"
          placeholder="用户名"
          value={username}
          onChange={changeUsername}
        />
      </SignInputStyle>
      <SignInputStyle>
        <Input
          size="large"
          placeholder="密码"
          value={password}
          onChange={changePassword}
          type="password"
        />
      </SignInputStyle>
    </>
  );
};

export default SigninInput;
