import * as React from "react";
import styled from "styled-components";
import TopicItem from "./components/TopicItem";
import { TOPIC_IMAGE } from "../../constants/index";
import { message } from "antd";

const TopicStyle = styled.div`
  width: 100%;

  > div:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const Topic = () => {
  const topicDetail = () => {
    message.info("该功能正在开发中");
  };

  return (
    <TopicStyle>
      {TOPIC_IMAGE.map(item => (
        <TopicItem key={item.name} item={item} topicDetail={topicDetail} />
      ))}
    </TopicStyle>
  );
};

export default Topic;
