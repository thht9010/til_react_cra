# utility

- 이미 만들어둔 `type 을 더 쉽게 사용`하는 도구
- 기존 유명 ts 라이브러리 분석 및 활용에 도움이 됨.
- 경험이 쌓이면 자주 활용하는 문법

## 1. Partial<T>

- 모든 속성을 ? 로 변환함(Optional) : 선택적 속성

```ts
interface Student {
  name: string;
  age: number;
}
// 반드시 속성이 있어야 함
const hi: Student = {
  name: "안녕하세요",
  age: 30,
};
// Partial 을 이용해서 선택적 속성 만들기
// 변환됨 { name?: string, age?: number}
const hello: Partial<Student> = {
  name: "반갑습니다",
};
```

## 2. Requied<T>

```ts
interface UserConfig {
  darkMode?: boolean;
  fontSize?: number;
}
const hi: UserConfig {
  darkMode: true,
}
// 위의 타입을 필수 요소로 변경하고자 함.
const hello: Required<UserConfig> = {
  darkeMode: true,
  fontSize: 20,
}
```

## 3. Readonly<T>

- 모든 속성을 초기 값 설정 후 변경못하게 하는 문법

```ts
interface UserConfig {

}
const hi: UserConfig {
  darkMode: true,
  fontSize: 20,
}
hi.fontSize = 20; // 변경 가능
Readonly는 초기 설정 후 변경 불가
{ readonly darkMode: boolean,
  readonly fontSize: number;}
const hello: Readyonly<UserConfig> = {
  darkMode: true,
  fontSize: 20,
};
hello.fontSize = 40;
```

## 4. Pick<T>

- 필요로 한 속성만 별도로 뽑아주는 문법

```ts
interface GameItem {
  id: number;
  name: string;
  point: number;
}
const itemSword: GameItem = {
  id: 101,
  name: "안녕하세요",
  point: 1000,
};
type showItem = Pick<GameItem, "id" | "name">;
const myItem: ShowItem = {
  id: 101,
  name: "안녕하세요",
  point: 1000,
};
```

## 5. Omit<T>

- 특정 속성만 제거하는 문법

```ts
interface GameItem {
  id: number;
  name: string;
  point: number;
}
const itemSword: GameItem = {
  id: 101,
  name: "안녕하세요",
  point: 1000,
};
// Omit 을 이용하는 문법
type showItem = Pick<GameItem, "id" | "name">;
const myItem: ShowItem = {
  id: 101,
  name: "안녕하세요",
  point: 1000,
};
```

## 6. Reacord<K, T>

```js
type Subject = "math" | "english" | "hello";
type Score = Reacord<Subject: number>;
const hi: Score = {
  math: 80,
  english: 85,
  hello: 90,
}
```

## 7. Exclude<T, U>

- T 에서 U 를 제거하는 타입생성 문법

```ts
type Subject = "math" | "english" | "hello";
type Score = Exclude<Subject, "math">;
const hi: Score = "hello";
```

```ts
type Person = { "name" | "age" | "city"};
type Daegu = "city";
type Human = Exclude<Person, Daegu>;
```

## 8. Extract<T, U>

- T에서 U만 남기는 문법

```ts
type Person = "name" | "age" | "city";
type Daegu = "city";

type Human = Extract<Person, Daegu>;
```

## 9. ReturnType

- 함수의 리턴종류 타입 추출

```ts
function getScore() {
  return { total: 100, grade: "A" };
}
// Return Type 은 함수의 리턴 데이터 종류 추출
// { total: number;
//  grade: string;}
type ScoreType = ReturnType<typeof getScore>;
```

## 10. Parameters

- 함수의 매개변수의 타입을 튜플로 추출
- 튜플 : `[number, string]`

## 11. 종합 응용 예제

- 리액트 타입스크립트 버전
- 회원가입 폼 작성
- src/SignUpForm.tsx 생성

### 11.1 파일 확장자의 이해

- js : js 내용 작성
- jsx : js + html 내용 리턴
- ts: ts 내용 작성(js 생성)
- tsx: ts + html 내용 리턴 (jsx 생성)

### 11.2 추후 React TS 버전에서 활용예정
