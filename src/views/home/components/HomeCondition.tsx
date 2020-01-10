import * as React from "react";
import styled from "styled-components";
import { Menu, Dropdown, Icon } from "antd";

const HomeConditionStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 4px;
  font-size: 12px;
  color: #999;
`;

interface HomeConditionProp {
  label: string;

  changeSortType: (e: { key: string }) => void;
}

const HomeCondition = (props: HomeConditionProp) => {
  const { changeSortType, label } = props;

  const menu = (
    <Menu onClick={changeSortType}>
      <Menu.Item key="1">按创建时间排序</Menu.Item>
      <Menu.Item key="2">按更新时间排序</Menu.Item>
    </Menu>
  );

  return (
    <HomeConditionStyle>
      <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
        <span className="ant-dropdown-link">
          {label} <Icon type="down" />
        </span>
      </Dropdown>
    </HomeConditionStyle>
  );
};

export default HomeCondition;
