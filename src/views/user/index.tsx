import * as React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import UserNav from "./components/UserNav";
import UserInfo from "./components/UserInfo";
import Following from "../following/index";
import Followers from "../followers/index";
import Gist from "../gist/index";

const UserStyle = styled.div`
  width: 100%;
`;

const User = () => {
  return (
    <UserStyle>
      <UserInfo />
      <UserNav />
      <UserStyle>
        <Route path="/user/gist" component={Gist} />
        <Route path="/user/following" component={Following} />
        <Route path="/user/followers" component={Followers} />
      </UserStyle>
    </UserStyle>
  );
};

export default User;
