import * as React from "react";
import styled from "styled-components";

export const SignTitleStyle = styled.h3`
  display: flex;
  align-items: center;
  padding-bottom: 16px;

  > .iconfont {
    font-size: 20px;
  }
`;

const SigninTitle = () => {
  return (
    <SignTitleStyle>
      <i className="iconfont">&#xe63a;</i>
      <span>登录片段</span>
    </SignTitleStyle>
  );
};

export default SigninTitle;
