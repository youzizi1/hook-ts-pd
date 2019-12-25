import * as React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #fff;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 16px;
`;

const LoginTitle = styled.h3`
  display: flex;
  align-items: center;
  padding-bottom: 16px;

  > .iconfont {
    font-size: 20px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;

  .ant-input {
    border: none;
    border-bottom: 1px solid #ebeef5;
  }
`;

const TipsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 16px;

  > span {
    color: #409eff;
    text-decoration: underline;
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;

  .ant-btn {
    font-size: 14px;
    color: #606266;
  }
`;

const Login = () => {
  return (
    <LoginStyle>
      <LoginContainer>
        <LoginTitle>
          <i className="iconfont">&#xe63a;</i>
          <span>登录片段</span>
        </LoginTitle>
        <InputContainer>
          <Input size="large" placeholder="邮箱" />
        </InputContainer>
        <InputContainer>
          <Input size="large" placeholder="密码" />
        </InputContainer>
        <TipsContainer>
          <span>忘记密码？</span>
        </TipsContainer>
        <ButtonContainer>
          <Button block size="large">
            马上登录
          </Button>
        </ButtonContainer>
      </LoginContainer>
    </LoginStyle>
  );
};

export default Login;
