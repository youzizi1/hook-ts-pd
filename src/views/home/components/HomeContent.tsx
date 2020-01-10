import * as React from "react";
import Code from "../../../base/code/index";
import styled from "styled-components";

const HomeContentStyle = styled.div`
  width: 100%;

  > div:not(:first-of-type) {
    margin-top: 32px;
  }
`;

interface HomeContentProp {
  data: any;
}

const HomeContent = (props: HomeContentProp) => {
  const { data } = props;

  return (
    <HomeContentStyle>
      {data.map((item: any, index: number) => (
        <Code item={item} key={index} />
      ))}
    </HomeContentStyle>
  );
};

export default HomeContent;
