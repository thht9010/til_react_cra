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

```js
import React, { useState } from "react";

function Test() {
  // js 자리
  // 입력 중인 할일
  const [todo, setTodo] = useState("");
  // 전체 목록
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    // const temp = "할일 이지요";
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo("");
  };
  const handleChange = e => {
    // console.log(e.target); // 태그가 들어온다.
    setTodo(e.target.value);
  };
  const handleKeyup = e => {
    if (e.key === "Enter") {
      if (todo === "") {
        return;
      }
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };
  // jsx 자리
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyup(e)}
      />
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

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리

  // jsx 자리
  const [dark, setDark] = useState(false);
  const handleClick = () => {
    setDark(!dark);
  };
  const AppStyle = {
    width: "100%",
    height: "100%",
    padding: "20px",
    color: dark ? "#ffffff" : "#000000",
    background: dark ? "#000000" : "#ffffff",
  };
  return (
    <div>
      <button onClick={handleClick}>
        {dark ? "화이트 모드로 변경" : "다크모드로 변경"}
      </button>
      <h1>{dark ? "현재 다크모드 입니다." : "현재 화이트 모드 입니다."}</h1>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [cart, setCart] = useState([]);
  const handleCartAdd = good => {
    setCart([...cart, good]);
  };
  // jsx 자리
  return (
    <div>
      <h2>장바구니</h2>
      <button onClick={() => handleCartAdd("사과")}>사과</button>
      <button onClick={() => handleCartAdd("바나나")}>바나나</button>
      <button onClick={() => handleCartAdd("멜론")}>멜론</button>
      <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리

  // 변수 관리

  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    pw: "",
  });

  // 이벤트 처리함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPassword = e => {
    setUserPassword(e.target.value);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로 고침 방지
    e.preventDefault();
    if (userId === "") {
      errorMessage("아이디를 입력하세요.");
      return;
    }
    if (userEmail === "") {
      errorMessage("이메일을 입력하세요.");
      return;
    }
    if (userPassword === "") {
      errorMessage("비밀 번호를 입력하세요.");
      return;
    }
    console.log("전송");
    console.log(`${userId} ${userEmail} ${userPassword}`);
    // 쿼리 스트링으로 보내기.
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPassword}`);

    // 객체로 보내기.

    setFormData({ id: userId, email: userEmail, pw: userPassword });
    setErrorMessage("");
  };
  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            value={userId}
            placeholder="아이디를 입력하세요."
            onChange={e => handleUserId(e)}
          />
          <br />
          <input
            type="email"
            value={userEmail}
            placeholder="이메일을 입력하세요."
            onChange={e => handleUserEmail(e)}
          />
          <br />
          <input
            type="password"
            value={userPassword}
            placeholder="비밀번호를 입력하세요."
            onChange={e => handleUserPassword(e)}
          />
          <br />
          <button type="submit">로그인</button>
        </form>
        <div style={{ color: "skyblue" }}>{errorMessage}</div>
      </div>
    </div>
  );
}

export default Test;
```

### 4.1. 회원가입

### 4.2. 기능 개선 이전 버전

```jsx
// src/pages/
```

```jsx
// src/componunts/form/LoginForm.jsx
import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

function LoginForm({
  userId,
  setUserId,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  formData,
  errorMessage,
  handleUserId,
  handleUserEmail,
  handleUserPassword,
  handleSubmit,
}) {
  // js 자리
  const FormContainer = styled.div`
    width: "100%";
    padding: "25px";
    max-width: "400px";
    margin: 30px auto;
    border-radius: 16px;
    background-color: #fafafa;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  `;
  const ErrorText = styled.div`
    color: red;
    margin-top: 10px;
    font-size: 12px;
  `;
  const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    max-width: 500px;
    margin: 30px auto;
    border-radius: 15px;
    background-color: #007bff;
    color: #ffffff;
    cursor: pointer;
    font-size: 12px;
    &:hover {
      background-color: #0056b3;
    }
  `;

  // jsx 자리

  return (
    <FormContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <InputField
          label="아이디"
          type="text"
          value={userId}
          placeholder="입력하세요"
          onChange={e => handleUserId(e)}
        />
        <InputField
          label="이메일"
          type="email"
          value={userEmail}
          placeholder="이메일을 입력하세요"
          onChange={e => handleUserEmail(e)}
        />
        <InputField
          label="비밀번호"
          type="password"
          value={userPassword}
          placeholder="비밀번호를 입력하세요."
          onChange={e => handleUserPassword(e)}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
```

```jsx
// src/components/form/InputField.jsx
import styled from "@emotion/styled";
import React from "react";

function InputField({ label, type, value, placeholder, onChange }) {
  // js 자리
  const StyledInput = styled.input`
    width: "100%";
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 14px;
    &:focus {
      outline: none;
      border: 1px solid #007bff;
    }
  `;
  const StyledLabel = styled.label`
    font-size: 12px;
    padding-left: 10px;
    color: #333333;
    font-weight: 600;
    white-space: nowrap;
    min-width: 50px;
  `;
  const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  `;
  // jsx 자리
  return (
    <InputGroup>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
    </InputGroup>
  );
}

export default InputField;
```

### 4.3. 기능 개선 버전

- useState 가 너무 많다.

```jsx
import React, { useState } from "react";
import FormContainer from "../components/Forms/FormContainer";
import LoginForm from "../components/form/LoginForm";

function Test() {
  // js 자리

  // 변수 관리

  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    pw: "",
  });

  // 이벤트 처리함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPassword = e => {
    setUserPassword(e.target.value);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로 고침 방지
    e.preventDefault();
    if (userId === "") {
      errorMessage("아이디를 입력하세요.");
      return;
    }
    if (userEmail === "") {
      errorMessage("이메일을 입력하세요.");
      return;
    }
    if (userPassword === "") {
      errorMessage("비밀 번호를 입력하세요.");
      return;
    }
    console.log("전송");
    console.log(`${userId} ${userEmail} ${userPassword}`);
    // 쿼리 스트링으로 보내기.
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPassword}`);

    // 객체로 보내기.

    setFormData({ id: userId, email: userEmail, pw: userPassword });
    setErrorMessage("");
  };

  // 모든 state 를 하나로 관리합니다.
  const [saveData, setSaveData] = useState({});

  const 함수명 = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // const name = e.traget.name;
    // const value = e.target.value;

    const { name, value } = e.target;
    console.log(name, value);

    setSaveData({ ...saveData, [name]: value });
  };
  // jsx 자리
  return (
    <div>
      <input type="text" name="a" value={"안녕"} onChange={e => 함수명(e)} />
      <input type="text" name="b" value={"안녕"} onChange={e => 함수명(e)} />
      <input type="text" name="c" value={"안녕"} onChange={e => 함수명(e)} />
      <input type="text" name="d" value={"안녕"} onChange={e => 함수명(e)} />
      <input type="text" name="e" value={"안녕"} onChange={e => 함수명(e)} />

      <h1>회원로그인</h1>
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        formData={formData}
        errorMessage={errorMessage}
        handleUserId={handleUserId}
        handleUserEmail={handleUserEmail}
        handleUserPassword={handleUserPassword}
        handleSubmit={handleSubmit}
      >
        {/* <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            value={userId}
            placeholder="아이디를 입력하세요."
            onChange={e => handleUserId(e)}
          />
          <br />
          <input
            type="email"
            value={userEmail}
            placeholder="이메일을 입력하세요."
            onChange={e => handleUserEmail(e)}
          />
          <br />
          <input
            type="password"
            value={userPassword}
            placeholder="비밀번호를 입력하세요."
            onChange={e => handleUserPassword(e)}
          />
          <br />
          <button type="submit">로그인</button>
        </form>
        <div style={{ color: "skyblue" }}>{errorMessage}</div> */}
      </LoginForm>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";
import FormContainer from "../components/Forms/FormContainer";
import LoginForm from "../components/form/LoginForm";

function Test() {
  // js 자리
  const [errorMessage, setErrorMessage] = useState("");
  // 모든 데이터가 모여지는 변수다.
  const [formData, setFormData] = useState({
    user_id: "",
    user_email: "",
    user_pw: "",
  });
const handleChange = e => {
  const { name, value } = e.target;
  setFormData({...formData, [name]: value});
};

  const handleSubmit = e => {
    // 웹브라우저 새로 고침 방지
    e.preventDefault();
    if (userId === "") {
      errorMessage("아이디를 입력하세요.");
      return;
    }
    if (userEmail === "") {
      errorMessage("이메일을 입력하세요.");
      return;
    }
    if (userPassword === "") {
      errorMessage("비밀 번호를 입력하세요.");
      return;
    }
    console.log("전송");
    console.log(`${userId} ${userEmail} ${userPassword}`);
    // 쿼리 스트링으로 보내기.
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPassword}`);

    // 객체로 보내기.

    setFormData({ id: userId, email: userEmail, pw: userPassword });
    setErrorMessage("");
  };

  // 모든 state 를 하나로 관리합니다.
  const [saveData, setSaveData] = useState({});

  };
  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        formData={formData}
        errorMessage={errorMessage}
        handleUserId={handleUserId}
        handleUserEmail={handleUserEmail}
        handleUserPassword={handleUserPassword}
        handleSubmit={handleSubmit}
      >
        {/* <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            value={userId}
            placeholder="아이디를 입력하세요."
            onChange={e => handleUserId(e)}
          />
          <br />
          <input
            type="email"
            value={userEmail}
            placeholder="이메일을 입력하세요."
            onChange={e => handleUserEmail(e)}
          />
          <br />
          <input
            type="password"
            value={userPassword}
            placeholder="비밀번호를 입력하세요."
            onChange={e => handleUserPassword(e)}
          />
          <br />
          <button type="submit">로그인</button>
        </form>
        <div style={{ color: "skyblue" }}>{errorMessage}</div> */}
      </LoginForm>
    </div>
  );
}

export default Test;

```

- 알아야 할 문법

```js
[...arr, 요소]


{...obj, [속성명]: 속성값}
const {name, value} = e.target;
{...obj, [name]: value}
```
