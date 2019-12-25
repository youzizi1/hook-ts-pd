import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, p, img, 
  a, i, h1, h2, h3, h4, h5, h6, 
  ul, li, ol, nav, pre, code {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: #606266;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, "sans-serif";
  }

  h1, h2, h3, h4, h5, h6, i {
    font-weight: normal;
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: #606266;
  }

  input, button {
    border: none;
    outline: none;
    background: none;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
