import * as React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

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

const TopicItemLogo = styled.div`
  width: 50px;
  height: 50px;

  > img {
    display: block;
    width: 100%;
    height: 100%;
  }
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

type Item = {
  name: string;
  alias: string;
};

interface TopicItemProp {
  item: Item;

  topicDetail: () => void;
}

const TopicItem = (props: TopicItemProp) => {
  const { item, topicDetail } = props;

  return (
    <TopicItemStyle onClick={topicDetail}>
      <TopicItemLogo>
        <LazyLoad height={200}>
          <img
            src={require(`../../../assets/images/topic/topic_${item.name}.png`)}
            alt={item.name}
          />
        </LazyLoad>
      </TopicItemLogo>
      <TopicItemInfo>
        <span className="title">{item.alias}</span>
        <span className="count">0 条投稿</span>
      </TopicItemInfo>
    </TopicItemStyle>
  );
};

export default TopicItem;
