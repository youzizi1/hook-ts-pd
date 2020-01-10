import * as React from "react";
import { Menu, Dropdown, Icon } from "antd";

interface LoginLinksProp {
  username: string;
  selectItem: (e: { key: string }) => void;
}

const LoginLinks = (props: LoginLinksProp) => {
  const { username, selectItem } = props;

  const menu = (
    <Menu onClick={selectItem}>
      <Menu.Item key="0">个人中心</Menu.Item>
      <Menu.Item key="1">退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <span className="ant-dropdown-link">
        {username}
        <Icon type="down" />
      </span>
    </Dropdown>
  );
};

export default LoginLinks;
