import * as React from "react";
import { message } from "antd";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useState } from "react";

import { SignStyle, SignContainerStyle } from "./style";
import SigninTitle from "./components/SigninTitle";
import SigninInput from "./components/SigninInput";
import SigninTip from "./components/SigninTip";
import SigninLoginButton from "./components/SigninButton";
import { setUsernameAction } from "../../store/signin/action";
import { loginApi } from "../../api/index";
import { useHistory } from "react-router";

export interface SigninProp {
  username: string;
  password: string;

  changeUsername: (e: React.FormEvent<HTMLInputElement>) => void;
  setUsername: (username: string) => void;
  forgetPassword: () => void;
}

const Signin = (props: SigninProp) => {
  const { setUsername } = props;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const changePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const forgetPassword = () => {
    message.info("该功能尚在开发中");
  };

  const login = async () => {
    if (!name || !password) {
      message.error("用户名或密码不能为空");
      return;
    }

    setLoading(true);

    try {
      const result: any = await loginApi(name, password);
      localStorage.setItem("username", result.username);
      localStorage.setItem("token", result.token);
      setUsername(result.username);
      message.success("登录成功");
      setLoading(false);
      history.push("/");
    } catch (error) {
      setLoading(false);
      message.error(`登录失败, ${error}`);
    }
  };

  return (
    <SignStyle>
      <SignContainerStyle>
        <SigninTitle />
        <SigninInput
          username={name}
          changeUsername={changeUsername}
          password={password}
          changePassword={changePassword}
        />
        <SigninTip forgetPassword={forgetPassword} />
        <SigninLoginButton login={login} loading={loading} />
      </SignContainerStyle>
    </SignStyle>
  );
};

const mapStateToProps = (state: any) => ({
  username: state.signin.username
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUsername(username: string) {
    dispatch(setUsernameAction(username));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
