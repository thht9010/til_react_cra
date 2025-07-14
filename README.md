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

# useEffect 와 useState, Event 종합 예제

## 1. useState 로 변수 설정

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// 전역(window) 자리
const Container = styled.div`
  max-width: 760px;
  margin: 30px auto;
  padding: 15px;
  background-color: #fbfbfb;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 12px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;

const Button = styled.button`
  padding: 3px;
  background-color: skyblue;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
`;

const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div``;

function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수

  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState({ initTodo });
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);
  // jsx 자리
  return (
    <Container>
      <Title>Todo</Title>
      <Form>
        <Section>
          <Label>제목</Label>
          <Input name="title" type="text" placeholder="안녕하세요" />
        </Section>
        <Section>
          <Label>내용</Label>
          <TextArea name="content" />
        </Section>
        <Section>
          <Button type="submit">등록</Button>
        </Section>
      </Form>
      <SubTitle>상세보기</SubTitle>
      <InputWrap>
        <Label>선택한 제목</Label>
        <Input name="title" type="text" />
      </InputWrap>
      <InputWrap>
        <Label>선택한 내용</Label>
        <Input name="title" type="text" />
      </InputWrap>
      <SubTitle>할일 목록</SubTitle>
      <Section>
        <TodoItem>
          <TodoContent>아이디: 타이틀</TodoContent>
          <TodoButtonWrap>
            <Button>삭제</Button>
            <Button>수정</Button>
          </TodoButtonWrap>
        </TodoItem>
      </Section>
    </Container>
  );
}

export default Todo;
```

## 2. useState 각 요소 연결하기

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// 전역(window) 자리
const Container = styled.div`
  max-width: 760px;
  margin: 30px auto;
  padding: 15px;
  background-color: #fbfbfb;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 12px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;

const Button = styled.button`
  padding: 3px;
  background-color: skyblue;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
`;

const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div``;

function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수

  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState({ initTodo });
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);
  // jsx 자리
  return (
    <Container>
      <Title>Todo</Title>
      <Form>
        <Section>
          <Label>제목</Label>
          <Input
            name="title"
            value={todo.title}
            type="text"
            placeholder="안녕하세요"
          />
        </Section>
        <Section>
          <Label>내용</Label>
          <TextArea value={todo.content} name="content" />
        </Section>
        <Section>
          <Button type="submit">등록</Button>
        </Section>
      </Form>
      <SubTitle>상세보기</SubTitle>
      <InputWrap>
        <Label>선택한 제목</Label>
        <Input name="title" value={editTodo.title} type="text" />
      </InputWrap>
      <InputWrap>
        <Label>선택한 내용</Label>
        <Input name="title" value={editTodo.content} type="text" />
      </InputWrap>
      <SubTitle>할일 목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem>
            <TodoContent>
              {item.id}: {item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button>삭제</Button>
              <Button>수정</Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

### 3.2. 할일 목록 이벤트 처리

- 삭제, 수정 처리

#### 3.2.1. 목록 삭제 이벤트 처리

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// 전역(window) 자리
const Container = styled.div`
  max-width: 760px;
  margin: 30px auto;
  padding: 15px;
  background-color: #fbfbfb;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 12px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;

const Button = styled.button`
  padding: 3px;
  background-color: skyblue;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
`;

const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div``;

function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수

  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState({ initTodo });
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);
  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("안녕하세요.");
      return;
    }
    if (!todo.content) {
      alert("반갑습니다.");
      return;
    }
    // todoList를 업데이트 합니다.
    // {id: 0, title: "", content: ""}
    setTodoList([...todoList, { ...todo, id: todoList.length }]);
    setTodo(initTodo);
  };
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾고, 제거하고, 목록 업데이트
    const tempList = todoList.filter();
  };
  // 할일 목록 수정 이벤트 처리
  const handleTodoListSelect = id => {
    // 만약 id 만 전달한다면 todoList 에서 데이터를 뽑는 작업을 다시 진행
    const tempTodo = todoList.filter(item => item.id === id);
    setEditTodo({ ...tempTodo[0] });
  };
  // jsx 자리
  return (
    <Container>
      <Title>Todo</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              type="text"
              placeholder="안녕하세요"
            />
          </InputWrap>
          <Section>
            <Label>내용</Label>
            <TextArea value={todo.content} name="content" />
          </Section>
          <Section>
            <Button type="submit">등록</Button>
          </Section>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <InputWrap>
        <Label>선택한 제목</Label>
        <Input name="title" value={editTodo.title} type="text" />
      </InputWrap>
      <InputWrap>
        <Label>선택한 내용</Label>
        <Input name="title" value={editTodo.content} type="text" />
      </InputWrap>
      <SubTitle>할일 목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem>
            <TodoContent>
              {item.id}: {item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
              <Button>수정</Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

#### 3.2.2. 목록 수정 이벤트 처리

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// 전역(window) 자리
const Container = styled.div`
  max-width: 760px;
  margin: 30px auto;
  padding: 15px;
  background-color: #fbfbfb;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 12px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;

const Button = styled.button`
  padding: 3px;
  background-color: skyblue;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
`;

const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div``;

function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수

  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState({ initTodo });
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);
  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("안녕하세요.");
      return;
    }
    if (!todo.content) {
      alert("반갑습니다.");
      return;
    }
    // todoList를 업데이트 합니다.
    // {id: 0, title: "", content: ""}
    setTodoList([...todoList, { ...todo, id: todoList.length }]);
    setTodo(initTodo);
  };
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾고, 제거하고, 목록 업데이트
    const tempList = todoList.filter();
  };
  // 할일 목록 수정 이벤트 처리
  const handleTodoListSelect = id => {
    // 만약 id 만 전달한다면 todoList 에서 데이터를 뽑는 작업을 다시 진행
    const tempTodo = todoList.filter(item => item.id === id);
    setEditTodo({ ...tempTodo[0] });
  };
  // jsx 자리
  return (
    <Container>
      <Title>Todo</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              type="text"
              placeholder="안녕하세요"
            />
          </InputWrap>
          <Section>
            <Label>내용</Label>
            <TextArea value={todo.content} name="content" />
          </Section>
          <Section>
            <Button type="submit">등록</Button>
          </Section>
        </Form>
      </Section>
      <SubTitle>상세보기</SubTitle>
      <InputWrap>
        <Label>선택한 제목</Label>
        <Input name="title" value={editTodo.title} type="text" />
      </InputWrap>
      <InputWrap>
        <Label>선택한 내용</Label>
        <Input name="title" value={editTodo.content} type="text" />
      </InputWrap>
      <SubTitle>할일 목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem>
            <TodoContent>
              {item.id}: {item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
              <Button onClick={() => handleTodoListSelect(item.id)}>
                수정
              </Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

#### 3.2.3. 할일 수정 이벤트 처리

## 4. 추가기능

### 4.1. 목록 메시지 출력하기

### 4.2. 수정 중일 때만 수정 내용 보이기

- `const [isEdit, setIsEdit] = useState(false) `
- 수정창이 보이는 부분에 리액트 변수 하나 추가 처리

```jsx

```

## 5. 기능 버그 개선

### 5.1. id 는 고유해야 한다.

- 삭제 이후 추가하면 id 중복 발생
- uuid 라이브러리 또는 일정하게 증가하는 리액트 변수 활용

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
// 전역(window) 자리
const Container = styled.div`
  max-width: 760px;
  margin: 30px auto;
  padding: 15px;
  background-color: #fbfbfb;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 12px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;

const Button = styled.button`
  padding: 3px;
  background-color: skyblue;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
`;

const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 3px;
`;

// const TodoListMessage = styled.p`
//   text-align: center;
//   font-size: 11px;
//   color: #ff0000;
//   padding: 15px;
// `;
function Todo() {
  // js 자리
  // 리액트 변수를 이용한 화면 갱신
  // 1. 전체 할일 관리 변수
  const [todoList, setTodoList] = useState([]);
  // 2. 현재 작성중인 할일 관리 변수

  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState({ initTodo });
  // 절대로 겹쳐지지 않는 유일한 값을 만들려면?
  // 2.1. 랜덤한 값을 만들어서 id에 담는다. (uuid 라이브러리 활용)
  // 2.2. 계속 증가하는 값을 만들어서 id에 담는다.
  const [uid, setUid] = useState(0);
  // 3. 현재 상세화면에 출력되는 할일 관리 변수
  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);
  const [isEdit, setIsEdit] = useState(false);
  // 이벤트 처리
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (!todo.title) {
      alert("안녕하세요.");
      return;
    }
    if (!todo.content) {
      alert("반갑습니다.");
      return;
    }
    // todoList를 업데이트 합니다.
    // {id: 0, title: "", content: ""}
    setTodoList([...todoList, { ...todo, id: uid }]);
    setTodo(initTodo);
    setUid(uid + 1);
  };
  const handleDeleteTodo = id => {
    // todoList 목록에서 id 와 같은 것을 찾고, 제거하고, 목록 업데이트
    const tempList = todoList.filter();
  };
  // 할일 목록 수정 이벤트 처리
  const handleTodoListSelect = id => {
    // 만약 id 만 전달한다면 todoList 에서 데이터를 뽑는 작업을 다시 진행
    const tempTodo = todoList.filter(item => item.id === id);
    setEditTodo({ ...tempTodo[0] });
  };

  // 수정 이벤트 처리
  const handleEditChange = e => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };
  const handleEditSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const tempArr = todoList.map(item => {
      if (item.id === editTodo.id) {
        // 현재 수정되고 있던 할일 처리
        return { ...editTodo };
      } else {
        // 나머지 할일들
        return item;
      }
    });
    setTodoList(tempArr);
    setIsEdit(false);
  };

  // jsx 자리
  return (
    <Container>
      <Title>Todo</Title>
      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleEditChange}
              type="text"
              placeholder="안녕하세요"
            />
          </InputWrap>
          <Section>
            <Label>내용</Label>
            <TextArea
              value={todo.content}
              onChange={handleEditChange}
              name="content"
            />
          </Section>
          <Section>
            <Button type="submit">등록</Button>
          </Section>
        </Form>
      </Section>
      {isEdit && (
        <>
          <SubTitle>상세보기</SubTitle>
          <Section onSubmit={handleEditSubmit}>
            <InputWrap>
              <Label>선택한 제목</Label>
              <Input name="title" value={editTodo.title} type="text" />
            </InputWrap>
            <InputWrap>
              <Label>선택한 내용</Label>
              <Input name="title" value={editTodo.content} type="text" />
            </InputWrap>
          </Section>
        </>
      )}

      <SubTitle>할일 목록</SubTitle>
      <Section>
        {todoList.map(item => (
          <TodoItem>
            <TodoContent>
              {item.id}: {item.title}
            </TodoContent>
            <TodoButtonWrap>
              <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
              <Button onClick={() => handleTodoListSelect(item.id)}>
                수정
              </Button>
            </TodoButtonWrap>
          </TodoItem>
        ))}
      </Section>
    </Container>
  );
}

export default Todo;
```

## 6. 데이터 보관하기

- 웹브라우저에 임시보관
- 데이터베이스 컴퓨터에 보관 (MySQL, PostgreSQL, NonSQL...)

### 6.1. 웹브라우저에 보관하기 (F12 > Application)

- Cookie : 짧은 문자열로서 일정기간 동안 유지 후 파기
- Session: 웹 브라우저에서 활용하는 동안 유지(웹브라우저 종료 시 파기)
- Local storage: 웹 브라우저에 짧은 문자열 보관

### 6.2. Local Storage

- 웹 서비스가 시작하면 `할일 내용` 가져옮
- 사용자가 할 일 수정, 할일 삭제, 할일 추가 시 업데이트
- useEffect 활용
