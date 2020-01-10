import * as React from "react";
import { useState } from "react";
import { SignStyle, SignContainerStyle } from "../signin/style";
import { useHistory } from "react-router";

import SignupTitle from "./components/SignupTitle";
import SignupInput from "./components/SignupInput";
import SignupTip from "./components/SingupTip";
import SignupButton from "./components/SignupButton";
import { sendCodeApi, registerApi } from "../../api/index";
import { message } from "antd";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState("发送验证码");
  const [codeLoading, setCodeLoading] = useState(false);

  const history = useHistory();

  const login = () => {
    history.push("/signin");
  };

  const signup = async () => {
    if (validateParams()) {
      setLoading(true);
      try {
        await registerApi(username, password, email, code);
        message.success("注册成功");
        history.push("/signin");
      } catch (error) {
        message.error(`注册失败，${error}`);
      }
      setLoading(false);
    }
  };

  const changeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const changePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const changeCode = (e: React.FormEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  };

  const sendCode = async () => {
    if (!validateEmail(email)) {
      message.error("邮箱格式不正确");
      return;
    }

    setCodeLoading(true);
    try {
      await sendCodeApi(email);
      setLabel("没收到？重新发送");
      message.success("发送验证码成功");
    } catch (error) {
      message.error(`发送验证码失败，${error}`);
    }
    setCodeLoading(false);
  };

  const changeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const validateEmail = (email: string) => {
    const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    return reg.test(email);
  };

  const validateParams = () => {
    if (username && code && password) {
      if (!validateEmail(email)) {
        message.error("邮箱格式不正确");
        return false;
      }
      return true;
    } else {
      message.error("参数不完整");
      return false;
    }
  };

  return (
    <SignStyle>
      <SignContainerStyle>
        <SignupTitle />
        <SignupInput
          username={username}
          password={password}
          email={email}
          code={code}
          changeUsername={changeUsername}
          changePassword={changePassword}
          sendCode={sendCode}
          changeCode={changeCode}
          changeEmail={changeEmail}
          loading={codeLoading}
          label={label}
        />
        <SignupTip login={login} />
        <SignupButton signup={signup} loading={loading} />
      </SignContainerStyle>
    </SignStyle>
  );
};

export default Signup;
