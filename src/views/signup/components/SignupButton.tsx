import * as React from "react";
import { Button } from "antd";
import { SignButtonStyle } from "../../signin/components/SigninButton";

interface SignupButtonProp {
  loading: boolean;

  signup: () => void;
}

const SignupButton = (props: SignupButtonProp) => {
  const { signup, loading } = props;

  return (
    <SignButtonStyle>
      <Button block size="large" onClick={signup} loading={loading}>
        注册账号
      </Button>
    </SignButtonStyle>
  );
};

export default SignupButton;
