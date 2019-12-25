import * as React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

const HomeInputStyle = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.05);
`;

const InputContainer = styled.div`
  flex: 1;
  height: 100%;

  .ant-input {
    border-radius: 0;
    font-size: 13px;
    background: none;

    &::placeholder {
      color: #666;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 100%;

  .ant-btn {
    height: 100%;
    border-radius: 0;
  }
`;

const HomeInput = () => {
  return (
    <HomeInputStyle>
      <InputContainer>
        <Input placeholder="在这里查找你想要的片段" size="large" />
      </InputContainer>
      <ButtonContainer>
        <Button type="primary" icon="search" size="default" block />
      </ButtonContainer>
    </HomeInputStyle>
  );
};

export default HomeInput;
