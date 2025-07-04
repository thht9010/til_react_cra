import styled from "@emotion/styled";
import React from "react";

function Toast({ message = "반가워요.", bg = "#28a745" }) {
  // js 자리
  const StyledToast = styled.div`
    z-index: 999999;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: ${props => props.bg};
    color: #ffffff;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  `;
  // jsx 자리
  return <StyledToast bg={bg}>{message}</StyledToast>;
}

export default Toast;
