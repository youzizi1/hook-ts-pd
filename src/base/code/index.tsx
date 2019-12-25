import React, { useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";

const CodeStyle = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;
  color: #262626;
`;

const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 12px;
`;

const CodeBody = styled.div`
  width: 100%;
  height: 100%;

  > pre {
    margin: 0;
    padding: 14px;
  }
`;

const CodeBottom = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 12px;
  color: #606266;

  > span {
    padding-left: 8px;
    font-size: 13px;
  }
`;

const Avatar = styled.img.attrs({
  src: require("../../assets/images/user.jpeg"),
  alt: "avatar"
})`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;

  > i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: blue;
  }
  
  > span {
    padding-left: 8px;
  }
`;

const sourceCode = `console.log('hello world')
`.trim();

const Code = () => {
  useEffect(() => {
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }, []);

  return (
    <CodeStyle>
      <CodeHeader>两行代码让浏览器网页内容可编辑</CodeHeader>
      <CodeBody>
        <pre>
          <code className="language-js">{sourceCode}</code>
        </pre>
      </CodeBody>
      <CodeBottom>
        <Avatar />
        <span>MY BOO</span>
        <Language>
          <i></i>
          <span>JavaScript</span>
        </Language>
      </CodeBottom>
    </CodeStyle>
  );
};

export default Code;
