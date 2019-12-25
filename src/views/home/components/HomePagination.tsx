import * as React from "react";
import styled from "styled-components";
import { Pagination } from "antd";

const HomePaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0;
`;

const HomePagination = () => {
  return (
    <HomePaginationStyle>
      <Pagination defaultCurrent={1} total={50} size="small" />
    </HomePaginationStyle>
  );
};

export default HomePagination;
