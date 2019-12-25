import * as React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const TopicItemStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
`;

const TopicItemLogo = styled.img.attrs({
  src: require("../../../assets/images/language_js.png"),
  alt: "language_js"
})`
  width: 50px;
  height: 50px;
`;

const TopicItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 16px;

  .title {
    font-weight: bold;
    font-size: 15px;
  }

  .count {
    padding-top: 6px;
    color: #606266;
    font-size: 12px;
  }
`;

const TopicItem = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/topic-detail");
  };

  return (
    <TopicItemStyle onClick={handleClick}>
      <TopicItemLogo />
      <TopicItemInfo>
        <span className="title">JavaScript</span>
        <span className="count">4 条投稿</span>
      </TopicItemInfo>
    </TopicItemStyle>
  );
};

export default TopicItem;
