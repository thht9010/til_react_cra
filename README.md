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

```ts
// 배열의 특정 요소 인덱스를 가져오기
// 배열은 length 라는 속성이 있다.(길이, 요소 개수)
// 배열은 요소의 순서(index)가 있습니다.

function getItemIndex(
  배열: (number | string | boolean)[],
  인덱스: number,
): number | string | boolean {
  return 배열[인덱스];
}
// 규칙, 반드시 숫자 배열이여야 한다.(배열종류 제한이 걸림)
const result = getItemIndex([400, 700, 900], 200);
const result2 = getItemIndex(["안녕", "hi", "hello"], 200);
const result3 = getItemIndex([true, true, false, true], 200);
```

- any로 해결했다. (데이터 체크를 포기함)
- 혹시 지금은 에러가 없는데, 나중에 에러가 발생하지 않을까?

```ts
function getItemIndex(배열: any[], 인덱스: number): any {
  return 배열[인덱스];
}
// 규칙, 반드시 숫자 배열이여야 한다.(배열종류 제한이 걸림)
const result: any = getItemIndex([400, 700, 900], 200);
const result2: any = getItemIndex(["안녕", "hi", "hello"], 200);
const result3: any = getItemIndex([true, true, false, true], 200);
```

- `Generic 을 사용`하면 코딩 중에 오류 발견이 쉽고, 서비스 중에도 대응 수월함

```ts
function getItemIndex<T>(배열: T[], 인덱스: number): T {
  return 배열[인덱스];
}
// 규칙, 반드시 숫자 배열이여야 한다.(배열종류 제한이 걸림)
const result: number = getItemIndex([400, 700, 900], 200);
const result2: string = getItemIndex(["안녕", "hi", "hello"], 200);
const result3: boolean = getItemIndex([true, true, false, true], 200);
const result4: string | number | boolean = getItemIndex(
  [true, 100, "hello", null],
  200,
);
```

- 기본적으로 진행한 함수

```ts
// 배열의 요소 중 값이 있는지 파악기능
function findeItem(배열: (string | number)[], 값: string | number): boolean {
  return 배열.includes(값);
}
const result = findeItem(["안녕하세요", "반갑습니다", "안녕히가세요"], "안녕");
const result2 = findeItem([12, 20, 33], 20);
```

- any 로 해결해봄

```ts
// 배열의 요소 중 값이 있는지 파악기능
function findeItem(배열: any[], 값: any): boolean {
  return 배열.includes(값);
}
const result = findeItem(["안녕하세요", "반갑습니다", "안녕히가세요"], "안녕");
const result2 = findeItem([12, 20, 33], 20);
```

- Generic 으로 해결해 봄.

```ts
// 배열의 요소 중 값이 있는지 파악기능
function findeItem<T>(배열: T[], 값: T): boolean {
  return 배열.includes(값);
}
const result: boolean = findeItem(
  ["안녕하세요", "반갑습니다", "안녕히가세요"],
  "안녕",
);
const result2: boolean = findeItem([12, 20, 33], 20);
```

## 인터페이스 Generic 살펴보기

```ts
// 백엔드와 비동기 통신을 하는 중의 과정을 위한 객체 설계

interface ApiResponse {
  success: boolean;
  data: string | string[];
}
const loginApi: ApiResponse = {
  success: true,
  data: "ok",
};
const todoApi: ApiResponse = {
  success: true,
  data: ["안녕하세요", "반갑습니다", "안녕히가세요"],
};
```

- 앞으로 또 바뀔 소지가 있음
- any로 해결해 봄

```ts
interface ApiResponse {
  success: any;
  data: any | any[];
}
const loginApi: ApiResponse = {
  success: true,
  data: "ok",
};
const todoApi: ApiResponse = {
  success: false,
  data: ["안녕하세요", "반갑습니다", "안녕히가세요"],
};
```

- Generic 으로 해결해 봄 (코딩중 오류, 실행중 오류 파악 용이)

```ts
interface ApiResponse<T, U, V> {
  success: T;
  data: U | V[];
}
const loginApi: ApiResponse<boolean, string, string> = {
  success: true,
  data: "ok",
};
const todoApi: ApiResponse<number, string, string> = {
  success: 0,
  data: ["안녕하세요", "반갑습니다", "안녕히가세요"],
};
```

## 클래스에서 Generic 살펴보기

- 일반적 클래스 구성

```ts
// 저장하기 관련 클래스
class TodoStroage {
  // 내부에서만 사용할 변수
  private items: string[] = [];
  // method 만으로 즉 검증된 과정으로만 내부 item 배열에 접근
  add(item: string): void {
    this.items.push(item);
  }
  read(): string {
    return this.items;
  }
}
const a = new TodoStroage();
// result에는 인스턴스로서 {}가 저장됨
// result.items = ["안녕", "반가워"]; // 접근 값 변경 불가
// result.itesm.map();
// console.log(result.items); // 읽을 수도 없다.
result.add("안녕");
result.read();
```

- 다양한 데이터 종류를 위해서 any로 변경

```ts
// 저장하기 관련 클래스
class TodoStroage {
  private items: any[] = [];
  add(item: any): void {
    this.items.push(item);
  }
  read(): any {
    return this.items;
  }
}
const a = new TodoStroage();
result.add("안녕");
result.read();
```

- Generic 으로 활용

```ts
// 저장하기 관련 클래스
class TodoStroage<T> {
  private items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }
  read(): T {
    return this.items;
  }
}
const a = new TodoStroage<string>();
result.add("안녕");
result.read();
```
