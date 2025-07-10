import styled from "@emotion/styled";
import React from "react";
// 전역자리 (window) : 리랜더링 반영 안됨.
// styled 코드 자리
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Label = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #333333;
  white-space: nowrap;
  min-width: 60px;
`;
const InputStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;
function InputUi({ id, type, name, value, placeholder, label }) {
  // js 자리

  // jsx 자리
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <InputStyled
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
      />
    </InputGroup>
  );
}

export default InputUi;
