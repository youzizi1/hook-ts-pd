import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const UserNavStyle = styled.div`
  display: flex;
  padding-bottom: 24px;

  > a {
    margin-right: 32px;
    color: rgba(0,0,0,.4);
  }
`;

const UserNav = () => {
  return (
    <UserNavStyle>
      <NavLink to="/user/gist">我的片段</NavLink>
      <NavLink to="/user/following">关注了</NavLink>
      <NavLink to="/user/followers">关注者</NavLink>
    </UserNavStyle>
  );
};

export default UserNav;
