import * as React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import NoLoginLinks from "./components/NoLoginLinks";
import LoginLinks from "./components/LoginLinks";
import { message } from "antd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setUsernameAction } from "../../store/signin/action";

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

  .anticon {
    vertical-align: -3px;
    margin-left: 3px;
  }
`;

interface HeaderProp {
  username: string;

  setUsername: (username: string) => void;
}

const Header = (props: HeaderProp) => {
  const { username, setUsername } = props;
  const history = useHistory();

  const logoClick = () => {
    history.push("/");
  };

  const signin = () => {
    history.push("/signin");
  };

  const signup = () => {
    history.push("/signup");
  };

  const selectItem = (e: { key: string }) => {
    const { key } = e;
    if (key === "0") {
      message.info("该功能尚在开发中");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      setUsername("");
      message.success("退出登录成功");
    }
  };

  return (
    <HeaderStyle>
      <LeftContainer>
        <LogoContainer onClick={logoClick} />
        <RouterLinkContainer>
          <NavLink to="/">首页</NavLink>
          <NavLink to="/topic">专题</NavLink>
        </RouterLinkContainer>
      </LeftContainer>
      <RightContainer>
        {username ? (
          <LoginLinks username={username} selectItem={selectItem} />
        ) : (
          <NoLoginLinks signin={signin} signup={signup} />
        )}
      </RightContainer>
    </HeaderStyle>
  );
};

const mapStateToProps = (state: any) => ({
  username: state.signin.username
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUsername(username: string) {
    const action = setUsernameAction(username);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
