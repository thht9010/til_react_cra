import React, { useEffect, useState } from "react";

function Test() {
  // js 자리
  const [] = useState(0);

  useEffect(() => {
    console.log("안녕하세요");
    return () => {
      console.log("안녕히 계세요");
    };
  }, []);

  useEffect(() => {
    console.log(`${count} 이군요`);
    return () => {
      console.log("안녕히 계세요");
    };
  }, [count]);
  // jsx 자리
  return (
    <div>
      <p>{count}</p>
      <button>{() => setCount(count + 1)}점수</button>
    </div>
  );
}

export default Test;
