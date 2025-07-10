import styled from "@emotion/styled";
import React from "react";
import InputUi from "./InputUi";
// 전역(window) 자리: styled 자리: 리랜더링에서 배제됨.
// styled 자리
const FormContainer = styled.div`
  padding: 24px;
  width: 90%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fefefe;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;
function ReisterForm({ formData, errMessage }) {
  // js 자리

  // jsx 자리
  return (
    <FormContainer>
      <form>
        <InputUi
          id="id"
          type="text"
          name="name"
          value="value"
          placeholder="메시지"
        />
        <label htmlFor="아이디">라벨</label>
        <input type="text" value={""} name="" id="아이디" />
      </form>
    </FormContainer>
  );
}

export default ReisterForm;
