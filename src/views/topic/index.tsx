import * as React from "react";
import styled from "styled-components";
import TopicItem from "./components/TopicItem";

const TopicStyle = styled.div`
  width: 100%;

  > div:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const Topic = () => {
  return (
    <TopicStyle>
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
    </TopicStyle>
  );
};

export default Topic;
