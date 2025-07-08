# 리액트 Event

- 사용자의 인터렉션(마우스 관련, 내용 입력 등등)
- `카멜 케이스` 임을 기억하자.

## 1. 이벤트 종류

- onClick : 마우스 클릭
- onChange : form 태그의 내용이 바뀔때
- onSubmit : form 을 확인해서 전송할때
- onkeyDown : Keyboard 누를때
- onKeyup : Keyboard 땔때
- onMouseEnter : 마우스 커서가 걸쳐질때 (영역에 들어올때)
- onMouseLeave : 마우스 커서가 영역에서 벗어날때
- onFocus : form 요소에 포커스가 될때
- onBlur : form 요소에 포커스가 해제될때
- onInput : form 요소에 입력할때마다
- onDobuleClick : 더블클릭 할때

## 2. 예제

- `매개변수 없는 경우`와 `존재하는 경우` 구분하자.

### 2.1. onClick 이벤트

```js
import React, { useState } from "react";

// 파일로 만들어지지 않은 컴포넌트
function Hi({ data }) {
  // js 자리

  // jsx 자리
  return <div>{data?.name}안녕</div>;
}
function Test() {
  // js 자리
  const handleClick = () => {
    alert("클릭");
  };
  const handleClickParam = () => {
    alert("클릭");
  };
  // jsx 자리
  return (
    <div>
      <button onClick={handleClick}>매개변수 없는 클릭</button>
      <button onClick={() => handleClickParam("안녕")}>
        매개변수 존재하는 클릭
      </button>
    </div>
  );
}

export default Test;
```

### 2.2. onChange 이벤트

- event.target : 현재는 input 태그를 가르킴
- event.target.value : 현재 input 태그의 값(내용을 말함)

```js
import React, { useState } from "react";

function Test() {
  // js 자리
  const [txt, setTxt] = useState("");
  // jsx 자리
  return (
    <div>
      <input type="text" onChange={event => setTxt(event.target.value)} />
      <p>입력된 값 :{txt}</p>
    </div>
  );
}

export default Test;
```

### 2.3. onSubmit 이벤트

```js
import React from "react";

function Test() {
  // js 자리
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.id);
    console.log(event.target.id.value);
    console.log(event.traget.pw);
    console.log(event.traget.pw.value);
  };
  // jsx 자리
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <input type="text" name="id"></input>
        <input type="password" name="pw"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Test;
```

### 2.4. Keyboard 이벤트

- onKeyDown : 사용 안하길 권장.

```js
import React from "react";

function Test() {
  // js 자리
  const handleSearch = e => {
    console.log(e.target);
    const txt = e.target.value;
    if (e.key === "Enter") {
      alert(`${txt} 검색합니다.`);
    }
  };
  // jsx 자리
  return (
    <div>
      <input type="text" name="id" onKeyUp={e => handleSearch(e)} />
    </div>
  );
}

export default Test;
```

### 2.5. Mouse 이벤트

- onMouseOver, onMouseOut : 이것은 사용하시면 안됩니다.
- `onMouseEnter, onMouseLeave : 이것을 사용하세요.`

```js
import React from "react";

function Test() {
  // js 자리
  const handleOver = () => {
    console.log("마우스 오버");
  };
  const handleOut = () => {
    console.log("마우스 아웃");
  };
  // jsx 자리
  return (
    <div
      onMouseEnter={handleOver}
      onMouseLeave={handleOut}
      style={{ background: "yellow" }}
    >
      <div style={{ border: "5px solid skyblue", margin: "20px" }}>박스</div>
      <div style={{ border: "5px solid green", margin: "20px" }}>박스2</div>
    </div>
  );
}

export default Test;
```

### 2.6. Focus 이벤트

- onFocus, onBlur : 포커스가 된 경우와, 해제된 경우(input 태그)

```js
import React from "react";

function Test() {
  // js 자리
  const handleFocus = () => {};
  const handleBlur = () => {};
  // jsx 자리
  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
}

export default Test;
```
