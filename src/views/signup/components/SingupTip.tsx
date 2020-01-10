import * as React from "react";
import { SignTipStyle } from "../../signin/components/SigninTip";

interface SigninTipProp {
  login: () => void;
}

const SignupTip = (props: SigninTipProp) => {
  const { login } = props;

  return (
    <SignTipStyle>
      <span onClick={login}>已有账号</span>
    </SignTipStyle>
  );
};

export default SignupTip;
