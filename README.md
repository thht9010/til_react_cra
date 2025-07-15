# ts 심화 - 기본타입

- 굳이 타입을 작성하지 않아도 된다.

## 총 7가지의 기본타입

```ts
let StrVar = "string";
let numVar = 1;
let bigVar = BigInt(999999);
let boolVar = true;
let symbolVar = Symbol("symbol");

// 아래는 타입추론이 문법적으로 다르다.
let nullVar = null; // 타입추론 결과는 any
let null2Var: null = null; // 타입에 관여

// 아래는 타입추론이 문법적으로 다르다.
let undefinedVar = undefined; // 타입추론 결과는 any
let undefined2Var: undefined = undefined; // 타입에 관여
```

### 1. any

- 정말 자주 사용합니다. 타입이 중요하지 않을때
- 사용하지만 자주 사용하지는 말자

```ts
let anyVar: any = 1450;
let StrVar = "string";
let numVar = 1;
let bigVar = BigInt(999999);
let boolVar = true;
let symbolVar = Symbol("symbol");

// 아래는 타입추론이 문법적으로 다르다.
let nullVar = null; // 타입추론 결과는 any
let null2Var: null = null; // 타입에 관여

// 아래는 타입추론이 문법적으로 다르다.
let undefinedVar = undefined; // 타입추론 결과는 any
let undefined2Var: undefined = undefined; // 타입에 관여
```

### 2. unknown

- any 와 용도가 비슷하다.

```ts
let unknownVar: unknown;
unknowVar = 100;
unknowVar = "string";
unknowVar = true;
```

### 3. never

- 어떤 타입도 `저장 또는 리턴하지 않겠다` 는 의지표현
- 절대로 발생하지 않을 것이라는 의지표현
- 예외처리, 무한루프 처리에 활용

```ts
// 아래는 모두 에러입니다.
let neverVar: never = null;
let neverVar2: never = undefined;
let neverVar3: never = 1;
let neverVar4: never = "string";
```

# ts 심화 - 목록(배열)타입

- 리스트 타입

```ts
// 타입추론 잘 정리됨.
let numberArr = [1, 2, 3];
let strArr = ["hello", "hi"];
let arr = [treu, 500, "hi"];

// Generic 활용법
let numberArr: Array<number> = [1, 2, 3];
let strArr: Array<string> = ["hello", "hi"];
let arr: Array<boolean | number | string> = [treu, 500, "hi"];
```

# ts 심화 - Type, interface 타입

## 1. type 키워드로 정의하기

- 기본형 타입도 type 키워드로 별칭을 만들 수 있다.

```ts
type HiType = string;
let aaa: HiType = "Hello";

type AgeType = number;
let bbb: AgeType = 30;
```

- `복잡한 객체 형태`의 데이터도 type 키워드로 별칭을 만들 수 있다.

```ts
type IdolType = {
  name: string;
  age: string;
  year: number;
};

let hello: IdolType = {
  name: "hi",
  age: "20대",
  year: 2020,
};
```
