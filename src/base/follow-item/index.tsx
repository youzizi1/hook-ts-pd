import * as React from "react";
import styled from "styled-components";

const FollowItemStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  .name {
    padding-left: 16px;
    color: #222;
  }
`;

const Avatar = styled.img.attrs({
  src: require("../../assets/images/user.jpeg"),
  alt: "user_avatar"
})`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const FollowItem = () => {
  return (
    <FollowItemStyle>
      <Avatar />
      <span className="name">Heck</span>
    </FollowItemStyle>
  );
};

export default FollowItem;
