import styled from "@emotion/styled";
import React from "react";

function CommentsList({ id, title, userid }) {
  // js 자리
  const CommentCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid skyblue;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const CommentTitle = styled.h2`
    font-size: 20px;
    color: #333333;
    margin-bottom: 20px;
  `;
  const CommentUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999999;
  `;
  // jsx 자리
  return (
    <CommentCard>
      <CommentTitle>
        {id}:{title}
      </CommentTitle>
      <CommentUser>User: {userid}</CommentUser>
    </CommentCard>
  );
}

export default CommentsList;
