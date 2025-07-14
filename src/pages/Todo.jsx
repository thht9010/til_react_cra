import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
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
  // 컴포넌트에서 데이터 관리
  // 처음에 컴포넌트 화면에 보일때 한 번만 자료 불러오기
  useEffect(() => {
    // 초기값 불러오기
    const result = localStorage.getItem("todolist");
    if (!result) {
      localStorage.setItem("todolist", JSON.stringify([]));
      setTodoList([]);
      setUid(0);
    } else {
      try {
        // 가져온 데이터를 자바스크립트 객체인지 파악
        const json = JSON.parse(result);
        // 가져온 데이터가 배열인지 해석합니다.
        const checkArr = Array.isArray(arr);
        if (checkArr) {
          setTodoList(json);
          setUid(json.length);
        } else {
          setTodoList([]);
          setUid(0);
        }
      } catch (e) {
        console.error("JSON 형식이 아님", e.maessage);
      }
      const arr = JSON.parse(result);
    }
  }, []);
  // 할일 목록이 업데이트 될 때 저장하기
  useEffect(() => {
    // 목록 저장하기
    localStorage.getItem("todolist", JSON.stringify(todoList));
  }, [todoList]);

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
