import * as React from "react";
import styled from "styled-components";

export const SignTipStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 16px;

  > span {
    color: #409eff;
    text-decoration: underline;
    font-size: 12px;
  }
`;

interface SigninTipProp {
  forgetPassword: () => void;
}

const SigninTip = (props: SigninTipProp) => {
  const { forgetPassword } = props;

  return (
    <SignTipStyle>
      <span onClick={forgetPassword}>忘记密码？</span>
    </SignTipStyle>
  );
};

export default SigninTip;
