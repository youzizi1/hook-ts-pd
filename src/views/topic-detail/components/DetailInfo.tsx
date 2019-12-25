import * as React from "react";
import styled from "styled-components";

const DetailInfoStyle = styled.div`
  width: 100%;

  .title {
    height: 40px;
    line-height: 40px;
    font-weight: 400;
    font-size: 20px;
    color: #333;
  }

  .info {
    padding: 16px 0 12px;
    font-size: 13px;
    line-height: 1.7;
    color: #606266;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  padding: 12px 0 38px;

  > span {
    margin-right: 5px;
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    color: #444;
    font-size: 12px;
  }
`;

const DetailInfo = () => {
  return (
    <DetailInfoStyle>
      <div className="title">JavaScript</div>
      <div className="info">
        JavaScript
        是一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言。
      </div>
      <LinksContainer>
        <span>MDN</span>
        <span>V8 GitHub</span>
      </LinksContainer>
    </DetailInfoStyle>
  );
};

export default DetailInfo;
