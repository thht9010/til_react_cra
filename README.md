# Generic

- `타입을 나중에 결정한다.`
- Generic을 `타입 변수` 라고 정리하자.
- 일반적인 변수는 값이 바뀌지만, Generic은 값이 아니고 `변수의 종류를 변경`한다.

## 1. 문제 상황 살펴보기

- 매개변수의 `종류만 다르고` 기능은 같다.
- 아래 코드를 자주 볼 수 있다.

```ts
function showNumber(a: number): void {
  console.log(a);
}
showNumber(100);
function showString(a: string): void {
  console.log(a);
}
showString(안녕);

function showArg(a): void {
  console.log(a);
}
```

- 매개변수의 종류를 `any` 로 한다.
- 두 함수를 하나로 정리하는게 좋다.

```ts
function showArg(a: any): void {
  console.log(a);
}

showArg(0);
showArg("안녕");
```

- 위 처럼 any 작업을 했더니 추가적인 기능
- `any`는 서비스 실행 중 오류 발생함.
- 코딩 중에 오류 확인이 어려움.

```ts
function showArgA(a: any): void {
  console.log(a);
  console.log(a.length);
}

showArgA(0); // 실행 중에 오류발생
showArgA("안녕"); // 정상 작동
```

## 2. 문제 상황을 Generic 으로 해결해 보기

```ts
function showArgGeneric<T>(a: T): void {
  console.log(a);
}
showArgGeneric(0);
showArgGeneric("안녕");
```

- 아래의 코드는 아직도 오류로 처리 됩니다.
- 하지만, 실행중 오류가 아니고, 코딩 중 오류를 표현합니다.

```ts
function showArgGeneric<T>(a: T): void {
  console.log(a);
  // 아래의 문제는 타입 좁히기로 해결이 가능하다.
  // 타입 가드 라고 합니다.
  console.log(a.length);
}
showArgGeneric(0);
showArgGeneric("안녕");
```

```ts
function showArgGeneric<T>(a: T): void {
  console.log(a);

  // 타입 좁히기
  if ((a as any).length !== undefined) {
    console.log((a as any).length);
  } else {
    console.log("length 속성이 없습니다.");
  }
}
showArgGeneric(0);
showArgGeneric("안녕");
```

## 3. 다양한 예제

```ts
// 배열의 요소를 출력하는 함수
// 그런데 배열의 요소의 타입을 Generic 으로 구현

function showItems(
  arr: (string | number | boolean | { age: number; name?: string })[],
) {
  arr.forEach((item, index) => {
    console.log(`${index}번째 요소는 ${item}입니다.`);
  });
}
showItems(["a", "b", "c"]);
showItems([1, 2, 3, 4]);
showItems([true, true, false, true]);
showItems([
  { age: 100, name: "hello" },
  { age: 200, name: "hong" },
  { age: 300, name: "hi" },
]);
```

- Generic 활용 코드

```ts
function showItems<T>(arr: T[])(
  arr: (string | number | boolean | { age: number; name?: string })[],
) {
  arr.forEach((item, index) => {
    console.log(`${index}번째 요소는 ${item}입니다.`);
  });
}
showItems(["a", "b", "c"]);
showItems([1, 2, 3, 4]);
showItems([true, true, false, true]);
showItems([
  { age: 100, name: "hello" },
  { age: 200, name: "hong" },
  { age: 300, name: "hi" },
]);
```

- 두번째 예제

```ts
// 복사를 하는 함수
function copyValue(
  a: numbere | string | boolean | number[] | (number | string)[],
) {
  return a;
}
const result_1 = copyValue(1);
const result_2 = copyValue("hello");
const result_3 = copyValue(false);
const result_4 = copyValue([1, 2, 3]);
const result_5 = copyValue(["a", "b", "c"]);
```

```ts
// 복사를 하는 함수
function copyValue(a: any) {
  return a;
}
const result_1 = copyValue(1);
const result_2 = copyValue("hello");
const result_3 = copyValue(false);
const result_4 = copyValue([1, 2, 3]);
const result_5 = copyValue(["a", "b", "c"]);
```

- Generic 활용 코드

```ts
// 복사를 하는 함수
function copyValue<T>(a: T) {
  return a;
}
const result_1 = copyValue(1);
const result_2 = copyValue("hello");
const result_3 = copyValue(false);
const result_4 = copyValue([1, 2, 3]);
const result_5 = copyValue(["a", "b", "c"]);
```

```ts
// 입력값 반환하기
function returnSame<T>(input: T): T {
  return input;
}
const result_1: 1 = returnSame(1);
const result_2: "안녕" = returnSame("안녕");
const result_3: number[] = returnSame([1, 2, 3]);
```

## 함수에서 활용되는 Generic 살펴보기

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
let result_1: number = getFirst([1, 2, 3]);
let result_2: string = getFirst(["a", "b", "c"]);
let result_3: string | number = getFirst([300, "b", "c"]);
```

```ts
function reverseArr<T>(arr: T[]): T[] {
  return [...arr].reverse();
}
let result_1: number[] = reverseArr([1, 2, 3]);
let result_2: string[] = reverseArr(["a", "b", "c"]);
let result_3: (string | number)[] = reverseArr([300, "b", "c"]);
```

```ts
function mergeArr<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}
let result: number[] = mergeArr([1, 2, 3], [4, 5, 6]);
```

```ts
function mergeArr<T, U>(arr1: T[], arr2: U[]): (T, U)[] {
  return [...arr1, ...arr2];
}
let result: (string | number)[] = mergeArr([1, 2, 3], ["a", "b", "c"]);
```
