import styled from "@emotion/styled";
import React from "react";

function Modal({ children }) {
  // js 자리
  const OverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999999;
  `;
  const ModalBox = styled.div`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    min-width: 400px;
    min-height: 200px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  `;
  // jsx 자리
  return (
    <OverLay>
      <ModalBox>{children}</ModalBox>
    </OverLay>
  );
}

export default Modal;
