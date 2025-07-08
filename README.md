# useState

## 2. 리액트 변수라면

```js
import React from "react";

function Test() {
  // js 자리
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
    console.log(count);
  };
  // jsx 자리
  return <div>Test</div>;
}

export default Test;
```

## 3. 다양한 예제

```js
import React, { useState } from "react";

function Test() {
  // js 자리
  const [userName, setUserName] = useState("");
  const handleChange = e => {
    // setUserName(e.target.value);
  };
  const handleKeyUp = e => {
    if (e.key === "Enter") {
      const txt = e.target.value;
      if (!txt) {
        // 추후에 yup 라이브러리를 사용
        alert("이름을 한 자 이상 입력해주세요.");
        return;
      }
      setUserName(e.target.value);
    }
  };
  // jsx 자리
  return (
    <div>
      <h1>사용자 이름을 입력하면 이름 출력하기</h1>
      <input
        type="text"
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyUp(e)}
        placeholder="입력하세요."
      />
      <h2>안녕하세요. {userName}님 반가워요</h2>
    </div>
  );
}

export default Test;
```

```js
import React, { useState } from "react";

function Test() {
  // js 자리
  const [agree, setAgree] = useState(false);
  const handleChange = e => {
    // console.log(e.target);
    // console.log(e.target.value);
    console.log(e.target.checked);
  };
  // jsx 자리
  return (
    <div>
      <label>
        <input type="checkbox" onChange={e => handleChange(e)} />
        약관에 동의합니다.
      </label>
      <p>{agree ? "동의합니다" : "동의가 필요합니다."}</p>
    </div>
  );
}

export default Test;
```

```js
import React, { useState } from "react";

function Test() {
  // js 자리
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    const temp = "할일 이지요";
    setTodoList([...todoList, temp]);
  };
  // jsx 자리
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>목록 추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
```
