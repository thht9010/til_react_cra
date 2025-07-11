import styled from "@emotion/styled";

// styled 코드 자리
export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Label = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #333333;
  white-space: nowrap;
  min-width: 60px;
`;
export const InputStyled = styled.div`
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
