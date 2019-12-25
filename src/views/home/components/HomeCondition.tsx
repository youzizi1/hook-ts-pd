import * as React from "react";
import styled from "styled-components";
import { Menu, Dropdown, Icon } from "antd";

const HomeConditionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 4px;
  font-size: 12px;
  color: #999;
`;

const menu = (
  <Menu>
    <Menu.Item key="0">匹配度排序</Menu.Item>
    <Menu.Item key="1">按时间排序</Menu.Item>
    <Menu.Item key="2">按点赞排序</Menu.Item>
  </Menu>
);

const HomeCondition = () => {
  return (
    <HomeConditionStyle>
      <p>共 275 条记录</p>
      <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
        <span className="ant-dropdown-link">
          匹配度排序 <Icon type="down" />
        </span>
      </Dropdown>
    </HomeConditionStyle>
  );
};

export default HomeCondition;
