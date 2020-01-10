import * as React from "react";
import styled from "styled-components";
import { Pagination } from "antd";

const HomePaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0;
`;

interface HomePaginationProp {
  total: number;

  changePage: (page: number) => void;
}

const HomePagination = (props: HomePaginationProp) => {
  const { total, changePage } = props;

  return (
    <HomePaginationStyle>
      <Pagination
        defaultCurrent={1}
        total={total}
        size="small"
        onChange={changePage}
      />
    </HomePaginationStyle>
  );
};

export default HomePagination;
