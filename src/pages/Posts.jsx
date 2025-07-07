import React, { useState } from "react";
import PostList from "../components/Posts/PostList";

function Posts() {
  // js자리
  // 변수의 값이 변하면 화면을 다시 ReRendering 했으면 좋겠어.
  // React 는 변수값이 변하면 다시 리랜더링 한다.
  // 값이 변하면 리랜더링 하라는 문법을 제공합니다.
  //   let postsArr = [];
  const [postsArr, setPostsArr] = useState([]);
  async function getPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      console.log(result);
      //   postsArr = result;
      setPostsArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  //   getPosts();

  // 데이터를 컴포넌스로 출력하는 함수
  function makePostList() {
    let list = [];
    list = postsArr.map(function (요소, 인덱스) {
      return <PostList key={인덱스}></PostList>;
    });
    return list;
  }
  function resetList() {
    setPostsArr([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Posts 목록
        <button onClick={getPosts}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h1>
      <div>
        {postsArr.map(function (요소, 인덱스) {
          return (
            <PostList
              id={요소.id}
              title={요소.title}
              userid={요소.userid}
              key={인덱스}
            ></PostList>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
