# useEffect

## 1. 특징

- 리랜더링에서 제외되는 Hook
- Hook은 우선 `컴포넌트에서 자동으로 실행되는 함수`
- useState 에서 만든 리액트 변수 출력, 즉, 리액트 변수 확인하기
- 백엔드 비동기 통신, 즉, fetch 함수를 호출하기

## 2. 작동이 되는 즉 실행이 되는 3가지 경우

### 2.1. 컴포넌트가 화면에 보여질 때 (랜더링시)

- 딱 한번만 실행됩니다.

```js
useEffect(() => {
  // 계속 실행
});
```

### 2.3. 컴포넌트가 사라질때 (화면에서 제거될때)

- 클린업 함수

```js
useEffect(() => {
  // 딱 한번만 실행하기
  // 딱 한번만 실행하기
  // 딱 한번만 실행하기
  return () => {
    // 사라질때 하고싶은 일
  };
}, [리액트변수]);
```

## 3. 이해를 해보자

```js
useEffect(() => {
  window.addEventListner("resize", function () {
    // 실행할 일
  });
  window.addEventListner("scroll", function () {
    // 실행할 일
  });

  // 클린업 함수
  return () => {
    window.removeEventListner("resize", function () {
      // 실행할 일
    });
    window.removeEventListner("scroll", function () {
      // 실행할 일
    });
  };
}, []);
```

```js
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
```
