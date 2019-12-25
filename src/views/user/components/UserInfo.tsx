import * as React from "react";
import styled from "styled-components";

const UserInfoStyle = styled.div`
  display: flex;
  padding-bottom: 32px;
`;

const Avatar = styled.img.attrs({
  src: require("../../../assets/images/user.jpeg"),
  alt: "avatar"
})`
  width: 50px;
  height: 50px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;

  .name {
    margin-bottom: 4px;
    font-size: 16px;
    color: #646464;
    font-weight: bold;
  }

  .email {
    color: #606266;
    font-size: 13px;
  }
`;

const UserInfo = () => {
  return (
    <UserInfoStyle>
      <Avatar />
      <Info>
        <span className="name">MY BOO</span>
        <span className="email">1239547992@qq.com</span>
      </Info>
    </UserInfoStyle>
  );
};

export default UserInfo;
