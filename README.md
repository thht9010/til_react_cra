# 비동기(Asynchronous)

- `비동기 처리`란 js에서 너무 오래 시간 소비를 하는 작업
- 예) 백엔드 서버에게 자료를 요청하고 회신을 기다리는 경우
- 예) 파일을 읽어들이고, 서버로 파일을 전송하고, 결과를 기다리는 경우
- 비동기 처리는 시간이 많이 걸리는 작업 진행 중에 다른 일도 `병렬로 처리`하도록 함.

## 1. 종류

- XHR (Xml Http Request)
- Callback 함수
- Promise 함수

## 2. Dummy/Mockup 사이트 (백엔드 자료를 회신)

- https://jsonplaceholder.typicode.com
- https://fakestoreapi.com
- https://www.data.go.kr

## 3. 백엔드 데이터 API 확인 프로그램

- PostMan 설치 및 활용 필요
- 백엔드 측에 Swagger 구성을 요청하시면 좋습니다.

## 4. XHR (XML Http Request)

- `Request` 라는 단어를 알고 계셔야 합니다.(자료 요청)
- `Response` 라는 단어를 알고 계셔야 합니다. (결과 회신)
- `Query` 라는 단어도 알고 계셔야 합니다. (물음, Request 한 문자열)

### 4.1. 쿼리의 이해

- `https://isearch.interpark.com/result?q=대구&referrer=`
- 도메인 : https://isearch.interpark.com
- 라우터 경로 : /result
- 쿼리(자료요청 문자열)의 시작 : ?

### 4.2. 실제쿼리 상세 설명

- 실제쿼리 : q=대구&referrer=
- 변수 q = 대구
- referrer = null

### 4.3. 예제 분석

### 4.4. 쿼리를 전송시에는 5가지 방식으로 보낼 수 있다.

- `CRUD` 작업 (DB를 Create, Read, Update, Delete)

- GET : 자료를 주세요. (DB 에서 자료 읽고 결과 회신)
- POST : 자료를 전송합니다. (DB 에서 자료 한개 추가)
- DELETE : 자료를 삭제하세요. (DB 에서 자료 한개 삭제)
- PUT : 하나의 자료내용 전부를 교체하세요. (DB 에서 자료 한개 전체수정)
- PATCH : 하나의 자료내용중 한 부분만 수정하세요. (DB 에서 자료 한개 중 일부 수정)

### 4.5. XHR

```js
// 전체 게시글 요청하는 함수
function getPosts() {
  console.log("전체자료 주세요.");
  // 1. XHR 객체를 만든다.
  const xhr = new XMLHttpRequest();
  // 2. 백엔드에서 알려준 주소로 접속한다.
  // xhr.open("방식", "주소")
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  // 3. 만들어 둔 xhr 을 전송
  xhr.send();
  console.log("자료를 전송하였습니다.");
  console.log("다음 작업 진행합니다.");

  // 4. 백엔드에서 회신된 결과가 오면 실행됩니다.
  xhr.onload = function () {
    console.log("요청 처리가 된 경우의 결과 : ", xhr);
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("없는 페이지로 접속하셨습니다.");
    } else if (xhr.status === 505) {
      console.log("서버가 꺼졌습니다. 잠시 후 다시 시도해주세요.");
    }
  };
}
// 요청하기
getPosts();
```

### 4.6. 콜백함수로 개선해 보기

- 코드 개선 시도
- 예) 주소와 메서드 를 편리하게 개선

- `콜백 문제가 발생할 듯`

```js
// 지정된 주소로 Http 요청을 보내고 결과를 함수로 처리함.
@param {string} addr - 요청을 보낼 url (예: "posts", "albums")
@param {"GET"|"POST"|"PUT"|"DELETE"|"PATCH" } method - HTTP 메소드 종류
@param {(responseText:string) => void} callback - 요청 성공시

function getData(addr, method) {
  const url = `https://jsonplaceholder.typicode.com/${addr}`;
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();;
  xhr.onload = function () {
    if(xhr.status === 200) {
      // 콜백함수자리
      callback(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("없는 페이지로 접속하셨습니다.");
    } else if (xhr.status === 505) {
      console.log("서버가 꺼졌습니다. 잠시 후 다시 시도해주세요.");
    }
  }
}
function postParse(_data){}
function albumsParse(_data){}
function photosParse(_data){}
function todosParse(_data){}
getData("posts", "GET", postParse);
getData("albums", "GET", albumsParse);
getData("photos", "GET", photosParse);
getData("todos", "GET", todosParse);
```

### 4.7. HTTP Status의 이해

- https://

## 5. Promise

- `콜백 문제` 에 의한 단계별 실행과정에 대한 해결방안으로 제공
- 서버 연동이 끝날 때, `성공 함수`와 `실패 함수` 2개를 매개변수로 받아서 실행
- 2개의 함수는 서버연동이 완료되면 자동실행 되도록 구성.

## 5.1. Promise 는 2개의 매개변수(즉 콜백함수) 를 받음

- resolve 콜백함수 : 백엔드 정상 결과 처리 함수
- reject 콜백함수 : 백엔드 오류 결과 처리 함수

## 5.2. Promise 는 3가지의 상태가 있습니다.

- Pending : 결과를 대기중 ...
- Resolved : 성공됨
- Rejected : 실패함

## 5.3. Promise Chaning 예제

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function getData(addr, method) {
        // 주소
        const url = `https://jsonplaceholder.typicode.com/${addr}`;

        return new Promise(function (reslove, rejected) {
          const xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.send();

          xhr.onload = function () {
            if (xhr.status === 200) {
              // 콜백함수자리
              reslove(xhr.responseText);
            } else if (xhr.status === 404) {
              rejected(`${addr} 의 쿼리가 잘못되었습니다. 확인하세요.`);
            } else if (xhr.status === 505) {
              rejected(`알 수 없는 오류입니다. ${xhr.status}`);
            }
          };
        });
        const xhr = new XMLHttpRequest();
      }
      function postParse(_data) {}
      function albumsParse(_data) {}
      function photosParse(_data) {}
      function todosParse(_data) {}
      getData("posts", "GET")
        .then(function (res) {
          postParse(res);
          return getData("albums", "GET");
        })
        .then(function (res) {
          albumsParse(res);
          return getData("albums", "GET");
        })
        .then(function (res) {
          photosParse(res);
          return getData("photos", "GET");
        })
        .then(function (res) {
          todosParse(res);
          return getData("todos", "GET");
        })
        .catch(function (err) {
          console.log(err);
        });
    </script>
  </body>
</html>
```

## 6. async/await

- 추천

### 6.1. 반드시 다음 처럼 코딩을 진행하여야 한다.

- 반드시 함수여야 합니다.

```js
function getAllData() {}
```

- 반드시 function 앞에 async 를 붙여줘야 합니다.

```js
async function getAllData() {}
```

- 반드시 function 안에 try ~ catch 를 작성합니다.

```js
async function getAllData() {
  try {
  } catch (error) {}
}
```

- 실행하려는 함수는 반드시 try 블럭 안쪽에 배치
- 실행 하려는 함수는 반드시 앞에 await 를 붙인다.

```js
async function getAllData() {
  try {
    await getData("posts", "GET");
    await getData("albums", "GET");
    await getData("photos", "GET");
    await getData("todos", "GET");
  } catch (error) {}
}
```

```js
async function getData(addr, method) {
  // 주소
  const url = `https://jsonplaceholder.typicode.com/${addr}`;
  try {
    const response = await fetch(url, { method });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
```

```js
async function getData(addr, method) {
  // 주소
  const url = `https://jsonplaceholder.typicode.com/${addr}`;
  try {
    const response = await fetch(url, { method });
    if (response.ok) {
      return response.json();
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}
```
