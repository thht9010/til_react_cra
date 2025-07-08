# type 키워드

## 1. type 키워드를 왜 사용하는가?

- 길게 작성되는 타입을 짧게 줄여서 사용하려고

```ts
const user: { name: string; age: number; job: string } = {
  name: "안녕하세요",
  age: "30",
  job: "일반",
};
```

```ts
type User = { name: string; age: number; job: string };
const user: User = {
  name: "안녕하세요",
  age: "30",
  job: "일반",
};
```

- 코드를 더 간편하게 읽게하려고

```ts
type Subject = "국어" | "영어" | "수학";
const test: Subject = "";
```

```ts
type Subject = "국어" | "영어" | "수학";
const test: Subject = "";

type Score = number;
const aaa: Score = 95;
```

- 재활용 하려고 사용한다.

```ts
type Student = {
  name: string;
  age: string;
  major: string;
};

const hi: Student = { name: "하이", age: "25", major: "일반" };
const hello: Stundent = { name: "안녕하세요", age: "35", major: "일반" };
```

- 실수를 방지하려고

```ts
type Gender = "남자" | "여자";
const g: Gender = "뭐";
console.log(g);
```

## 2. type 키워드로 정의하는 법

### 2.1 `기본 타입`을 type으로 정의하기

```ts
type UserName = stirng;
const name: UserName = "안녕";

type UserAge = number;
const age: UserAge = 30;

type IsMember = boolean;
const isMebmer: IsMember = true;
```

- 추후 진행시에는 type 에 대한 정의를 먼저 고민해보자.

### 2.2. `객체`는 type 으로 정의하기

- `{속성명:속성값, 속성명:속성값}` 처럼 여러개를 묶어둔 형태

```ts
type Student = {
  name: string;
  age: number;
  major: string;
};
const hi: Student = { age: 30, name: "하이", major: "일반" };
```

### 2.3. 확장이 가능하다. (기존 type을 확장해서 또 다른 type 작성)

```ts
type Person = { name: string; age: number };
type Devloper = { name: string; age: number; job: string };

type Teacher = Person & { major: string };
const hi: Teacher = { age: 30, name: "하이", major: "일반" };
```

### 2.4. 유니온(`|`)문법도 제공함.

- 여러개 중에 하나

```ts
type Select = "OK" | "NO" | "CANCLE";
let userSelect: Selcet = "OK";
```

### 2.5. 인터셉션(`&`) 문법도 제공

- `모두 만족해야 함`

```ts
type Animal = {
  eye: number;
};
type Cat = {
  mustash: boolean;
};

type MyPet = Animal & Cat;
const cat: MyPet = { eye: 2, mustash: true };
```

### 2.6. Optional Property (`?`)

- 선택적 옵션 속성

```ts
type Person = {
  name: string;
  age: number;
  //선택적 옵션
  gender?: string;
};
const hi: Person = { name: "안녕", age: 30 };
```

### 2.7. ReadOnly

- 읽기 전용(`readonly`)
- `단 한번의 값 세팅, 변경 불가`

```ts
type Person = {
  name: string;
  age: number;
  // 읽기 전용
  readonly job: string;
};
const hi: Person = { name: "안녕", age: 30 };
hi.age = 30; // 값 변경됨
hi.name = "hi"; // 값 변경됨
hi.job = "일반"; // 오류발생, readonly
```

### 2.8. type 안에 type

```ts
type Adress = { lng: number; lat: number };
type Geo = {
  city: string;
  zipcode: string;
  geo: Geo;
};

const user: Address = {
  city: "대구",
  zipcode: "053",
  geo: { lat: 0, lng: 0 },
};
```

### 2.9. 인덱스 시그니처

- type 객체 정의에서

```js
type ScoreType = {
  [subject: string]: number;
}
const score: ScoreType = {}
```

### 2.10. 객체 배열 타입 정의

```ts
type Person = {
  name: string;
  age: number;
};
const human = [
  { name: "hi", age: 30 },
  { name: "hello", age: 25 },
  { name: "hong", age: 20, job: "일반" },
];
```

### 2.11. 함수 타입 정의

- 입력값, 리턴값 모두 타입을 정의할 수 있다.
- `type 타입명: (매개변수:타입) => 리턴값 타입`

```ts
type Add = (a: nubmer, b: number) => number;
```

- 기본형: 매개변수도 없고, 리턴도 없다.

```ts
const hello = () => {
  console.log("안녕");
};

const hello2: () => void = () => {
  console.log("안녕");
};

type SayHello = () => void;
const hello3: SayHello = () => {
  console.log("안녕");
};
```

- 매개변수가 있는 경우

```ts
const hello = (msg: string) => {
  console.log(msg);
};

type SayHello = (msg: string) => void;
const hello2: SayHello = (msg: string) => {
  console.log(msg);
};
```

- 매개변수도 있고, 리턴도 있다

```ts
const hello = (msg: string, word = string): string => {
  return msg + word;
};

type SayHello = (msg: string, word = string) => string;
const hello2: SayHello = (msg: string, word = string): string => {
  return msg + word;
};

const hello3: SayHello = (msg, word) => {
  return msg + word;
};
```

- 선택적 매개변수

```ts
const hello = (msg: string, word?: string) => {};

type SayHello = (msg: string, word?: string) => string;
const hello2: SayHello = (msg: string, word = string): string => {};

const hello3: SayHello = (msg, word) => {};
```

- 타입 객체에 함수 정의하기

```ts
type Caculator = {
  name: string;
  add: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
  multi: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
};
const calc: Calculator = {
  name: "계산기",
  add: (a, b) => a + b,
  minus: (a, b) => a - b,
  multi: (a, b) => a * b,
  divide: (a, b) => a / b,
};
calc.name;
calc.add(5, 6);
```
