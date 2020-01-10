import * as React from "react";
import styled from "styled-components";

const NoDataStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    .iconfont {
      font-size: 40px;
      color: rgb(211, 219, 209);
    }

    .nodata-text {
      padding: 10px;
      font-size: 13px;
      color: rgb(211, 219, 209);
    }
  }
`;

const NoData = () => {
  return (
    <NoDataStyle>
      <div>
        <span className="iconfont">&#xe62c;</span>
        <span className="nodata-text">暂时没有数据</span>
      </div>
    </NoDataStyle>
  );
};

export default NoData;
