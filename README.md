# type 과 interface 비교

## 1. 가장 큰 차이

- type : 객체, 기본형, 배열 등 모두 정의 가능
- interface : 객체만 대상으로 정의 가능

## 2. 객체 구조 정의 비교

```ts
interface IPerson {
  name: string;
  age: number;
}
type PersonType = {
  name: string;
  age: number;
};
```

## 3. 확장 방식의 차이

- interface : `extends`
- type : `&`

```ts
interface IAnimal {
  name: string;
}
// 확장
interface IDog extends IAnimal {
  bark(): void;
}

type AnimalType = {
  name: string;
};
// 병합
type DogType = AnimalType & {
  bark(): void;
};
```

## 4. interface 만 가능함.

- interface를 동일한 이름으로 재정의 가능

```ts
interface Dog = {
  name: stirng;
}
interface Dog = {
  age: number;
}
interface Dog = {
  bark(): void;
}
const a: Dog = {
  name: "강아지"
  age: 20,
  bark: () => console.log("멍")
}
// type 은 안됨
type DogType = {}
```

## 5. type 만 가능

- interface는 객체 모양만 만들수 있다.

```js
type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Result = string | number | boolean;
// 배열, 튜플(배열인데 , 개수와 종류를 미리 정의)


type Point = {number,number};
```

## 6. 클래스에서 implementes 는 `interface`

```js
interface 약속 = {
  nmae: string;
}
class Person implements 약속 {
  name: string;
}

// 아래도 가능함
type 약속타입 = {
  nubmer: string;
}
class Dog implements
```


## 7. 일반적 기준
- 객체 모양을 정의하는 경우 : interface 권장
- 여러 타입을 조합한다(유니온등) : type 권장
- 복잡한 타입(속성에 함수, 유니언 등등): type 권장
- 여러명이 작업한다면 : interface 권장
- 외부 라이브러리는 일반적으로 interface 로 작성이 되어짐.
