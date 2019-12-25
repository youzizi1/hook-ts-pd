import * as React from "react";
import { HashRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/style";
import { PrismStyle } from "./assets/style/prism";
import styled from "styled-components";
import Header from "./base/header";
import Home from "./views/home";
import Topic from "./views/topic";
import TopicDetail from './views/topic-detail/index';
import Signin from './views/signin/index';
import Signup from './views/signup/index';
import { IconStyle } from './assets/font/index';
import User from './views/user/index';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 320px;
  max-width: 750px;
  height: 100%;
  padding-top: 60px;
  margin: 0 auto;
`;

const ContentStyle = styled.div`
  display: flex;
  flex: 1;
  padding: 32px 16px;
  background-color: #f0f2f5;

  > div {
    width: 100%;
  }
`;

const App = () => {
  return (
    <HashRouter>
      <AppStyle>
        <GlobalStyle />
        <PrismStyle />
        <IconStyle />
        <Header />
        <ContentStyle>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/topic" component={Topic} />
            <Route path="/topic-detail" component={TopicDetail} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/user" component={User} />
          </div>
        </ContentStyle>
      </AppStyle>
    </HashRouter>
  );
};

export default App;
