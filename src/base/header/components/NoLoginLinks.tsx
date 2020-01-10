import * as React from "react";
import { NavLink } from "react-router-dom";

interface NoLoginLinksProp {
  signin: () => void;
  signup: () => void;
}

const NoLoginLinks = (props: NoLoginLinksProp) => {
  const { signin, signup } = props;

  return (
    <>
      <NavLink to="/signin" onClick={signin}>
        登录
      </NavLink>
      <NavLink to="/signup" onClick={signup}>
        注册
      </NavLink>
    </>
  );
};

export default NoLoginLinks;
