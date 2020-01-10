import * as React from "react";
import { Input, Button } from "antd";
import { SignInputStyle } from "../../signin/components/SigninInput";

interface SignupInputProp {
  username: string;
  password: string;
  email: string;
  code: string;
  loading: boolean;
  label: string;

  changeUsername: (e: React.FormEvent<HTMLInputElement>) => void;
  changePassword: (e: React.FormEvent<HTMLInputElement>) => void;
  changeEmail: (e: React.FormEvent<HTMLInputElement>) => void;
  changeCode: (e: React.FormEvent<HTMLInputElement>) => void;
  sendCode: () => void;
}

const SignupInput = (props: SignupInputProp) => {
  const {
    username,
    password,
    email,
    code,
    changeUsername,
    changePassword,
    changeCode,
    changeEmail,
    sendCode,
    loading,
    label
  } = props;

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
          placeholder="邮箱"
          value={email}
          onChange={changeEmail}
        />
      </SignInputStyle>
      <SignInputStyle>
        <Input
          size="large"
          placeholder="验证码"
          value={code}
          onChange={changeCode}
        />
        <span className="send-code">
          <Button loading={loading} onClick={sendCode}>
            {label}
          </Button>
        </span>
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

export default SignupInput;
