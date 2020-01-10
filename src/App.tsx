import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { GlobalStyle } from "./assets/style";
import { PrismStyle } from "./assets/style/prism";
import { IconStyle } from "./assets/font/index";

import styled from "styled-components";
import Header from "./base/header";
import asyncLoad from "./utils/index";

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

  > div {
    width: 100%;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <AppStyle>
        <GlobalStyle />
        <PrismStyle />
        <IconStyle />
        <Header />
        <ContentStyle>
          <div>
            <Route
              exact
              path="/"
              component={asyncLoad(() =>
                import(/* webpackChunkName: "home" */ "./views/home")
              )}
            />
            <Route
              path="/topic"
              component={asyncLoad(() =>
                import(/* webpackChunkName: "topic" */ "./views/topic")
              )}
            />
            <Route
              path="/signin"
              component={asyncLoad(() =>
                import(/* webpackChunkName: "signin" */ "./views/signin")
              )}
            />
            <Route
              path="/signup"
              component={asyncLoad(() =>
                import(/* webpackChunkName: "signup" */ "./views/signup")
              )}
            />
          </div>
        </ContentStyle>
      </AppStyle>
    </BrowserRouter>
  );
};

export default App;
