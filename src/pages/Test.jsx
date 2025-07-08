import React, { useState } from "react";

// 파일로 만들어지지 않은 컴포넌트
function Hi({ data }) {
  // js 자리

  // jsx 자리
  return <div>{data?.name}안녕</div>;
}
function Test() {
  // js 자리
  const [userData, setUserData] = useState([
    { name: "hong", age: "25" },
    { name: "hi", age: "35" },
    { name: "hello", age: "23" },
    { name: "park", age: "45" },
  ]);

  // jsx 자리
  return (
    <>
      <h2>전체 명단: map 활용</h2>
      <div>
        {userData.map(function (item, index) {
          return <Hi key={index} data={item}></Hi>;
        })}
      </div>
      <h2>연령이 20대인 회원명단: filter 활용</h2>
      <div>
        {userData
          .filter((item, index) => item.age < 30)
          .map((item, index) => (
            <Hi data={item} key={index}></Hi>
          ))}
      </div>
    </>
  );
}

export default Test;
