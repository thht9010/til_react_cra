# ts 심화 - Enum

- 여러개의 함수를 정의해서 사용할때 유용하다.
- Api 요청시 활용을 자주 함.
- 오타를 줄여줌.(협업시 유용함)

```jsx
export enum Status {
  DONE = "DOME",
  LOADING = "LOADING",
  ERROR = "ERROR",
  INIT = "INITIALIZE",
}
const doneStatus = "DONE";
const loadingStatus = "LOADING";
const errorStatus = "ERROR";
const initStatus = "INIT";

function runNetwork() {
  let status = initStatus;
  try {
    status = loadingStatus;
    // 복잡한 처리 ...
    // 복잡한 처리 ...
    status = doneStatus;
  }catch
}
```
