import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  z-index: 10;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.img.attrs({
  src: require("../../assets/images/logo.png"),
  alt: "logo"
})`
  width: 50px;
  height: 25px;
`;

const RouterLinkContainer = styled.div`
  padding-left: 32px;

  > a {
    padding: 0 12px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  > a {
    padding-left: 16px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

const Header = () => (
  <HeaderStyle>
    <LeftContainer>
      <LogoContainer />
      <RouterLinkContainer>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/topic">专题</NavLink>
      </RouterLinkContainer>
    </LeftContainer>
    <RightContainer>
      <NavLink to="/signin">登录</NavLink>
      <NavLink to="/signup">注册</NavLink>
    </RightContainer>
  </HeaderStyle>
);

export default Header;
