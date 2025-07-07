import React, { useState } from "react";
import CommentsList from "../components/Comments/CommentsList";

function Comments() {
  // js 자리
  const [CommentsData, setCommentsData] = useState([]);
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      setCommentsData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // jsx 자리
  function resetList() {
    setCommentsData([]);
  }

  return (
    <div>
      <h1>
        Comments 목록
        <button onClick={getComments}>목록 불러오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h1>
      <div>
        {CommentsData.map(function (요소, 인덱스) {
          return (
            <CommentsList
              userid={요소.postId}
              id={요소.id}
              title={요소.title}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
