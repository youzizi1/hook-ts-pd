import React, { useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";

const CodeStyle = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;
  color: #262626;
  border: 1px solid #ebeef5;
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

  .username {
    font-size: 13px;
    padding-bottom: 2px;
  }
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;

  > i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }

  > span {
    padding-left: 8px;
  }
`;

interface CodeProp {
  item: any;
}

const Code = (props: CodeProp) => {
  const { item } = props;
  useEffect(() => {
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }, []);

  return (
    <CodeStyle>
      <CodeHeader>{item.title}</CodeHeader>
      <CodeBody>
        <pre>
          <code className={`language-${item.category.name}`}>
            {item.content}
          </code>
        </pre>
      </CodeBody>
      <CodeBottom>
        <div className="username">{item.user.username}</div>
        <Language color={item.category.color}>
          <i></i>
          <span>{item.category.alias}</span>
        </Language>
      </CodeBottom>
    </CodeStyle>
  );
};

export default Code;
