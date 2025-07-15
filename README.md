# react-router-dom

- 리액트에는 http 경로로 페이지 이동, 즉 `화면이동을 못합니다.`
- http경로를 흔히 `router` 라고 칭합니다.
- router 즉, 경로를 이동하려면 react router dom 을 사용해야한다.

## 2. URI 의 구성

### 2.1. Protocol (네트워크 처리를 위한 약속)

```txt
https://
```

```txt
HTTP(HyperText Transfer Protocol)
: 웹 브라우저와 서버 컴퓨터간의 데이터 전송 규약

HTTPS(HTTP Secure)
: HTTP에 보안 (SSL/TLS) 을 추가한 프로토콜

FTP (File Transfer Protocol)
: 파일 전송에 사용하는 프로토콜
: 웹 호스팅 (웹 퍼블리싱을 하고나면 FTP 로 서버에 파일을 업로드 하여 서비스)
: Filezilla

SMTP (Simple Mail Transfer Protocol)
: 이메일 전송

DNS (Domain Name System)
: 도메인 이름으로 IP 주소로 변환
```

## 2.2. 도메인(Domain)

```txt
localhost
```

- 일반적으로 `홈페이지 주소`로 이해
- DNS 서버가 있어야 합니다.(AWS 나 Vercel 로 활용)

### 2.3. 포트 (Port)

```txt
:3000
```

- 컴퓨터의 연결주소로서 관례상 활용하는 번호 존재
- :80 웹서비스 포트 (index.html)
- :3036 DB 서비스 포트
- :3000 react 포트
- :5050 Vite 프로젝트 포트

### 2.4. 패스 (Path)

```txt
/todo/login
/member/info
```

- 백엔드 개발자가 작성합니다.

## 3. route 구성 (백엔드 역할)

- `site map`

```txt
<!-- 첫 페이지, 홈페이지 -->
http://localhost:3000

<!-- 팀 소개 -->
http://localhost:3000/about/team

<!-- src/pages/blog/Design.jsx -->
http://localhost:3000/blog/design
```

```txt
src/pages/Index.jsx
src/pages/about/About.jsx
src/pages/about/Mission.jsx
src/pages/about/Team.jsx
src/pages/service/Service.jsx
src/pages/blog/Blog.jsx
src/pages/blog/Design.jsx
src/pages/blog/Detail.jsx
```

## 5. npm 설치하기

```bash
npm i react-router-dom
```

## 6. Router 적용은 App.jsx 로 합시다.

- 반드시 적용 순서는 `Router > Routes > Route` 순서로

```jsx
import React from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
```

## 7. 라우터 구조에 맞는 파일 생성

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Index></Index>}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/about/mission" element={<Mission></Mission>}></Route>
    <Route path="/about/team" element={<Team></Team>}></Route>
    <Route path="/service" element={<Service></Service>}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/blog/design/1" element={<Design />}></Route>
    <Route path="/blog/design/detail?id=1" element={<Detail />}></Route>
  </Routes>
</Router>
```

## 7.1. 중첩 라우터 (Nested)

- `<Route index element={컴포넌트}>`

## 7.2. Not Found 페이지 구성

- 없는 path 로 접근한 경우 처리
- /src/pages/NotFound.jsx 생성

```jsx
<Route path="*" element={<NotFound />} />
```

## 7.3. Router에 Param 전달하기 및 처리

- `Rest Api` 방식
- 백엔드와 업무 진행시 Param 이라는 단어를 알아야 함.
- `경로/param`
- `http://localhost:3000/good/100`

```jsx
<Route path=":id" element={<Design />}></Route>
```

```jsx
import React from "react";
import { useParams } from "react-router-dom";

function Design() {
  // 객체 분해 할당
  const { id } = useParams;
  return <div>{id}Design</div>;
}

export default Design;
```

## 7.4. Router 에 search param 전달 처리하기

- Query String 처리하기
- `http://localhost:3000/blog/design/detail?id=1`

```jsx
<Route path="detail" element={<Detail />}></Route>
```

```jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

function Detail() {
  // ? serach params
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const user = searchParams.get("user");
  return (
    <div>
      블로그 상세 {id} {user} Detail
    </div>
  );
}

export default Detail;
```

## 7.5. 공통 레이아웃

```html
<body>
  <div class="wrap">
    <header>메뉴/로고</header>
    <main>메뉴별 내용</main>
    <footer>카피라이터</footer>
  </div>
</body>
```

```jsx
import React from "react";
import { Link, BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/about/About";
import Mission from "./pages/about/Mission";
import Team from "./pages/about/Team";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import Detail from "./pages/blog/Detail";
import Design from "./pages/blog/Design";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">로고</Link>
        <Link to="/about">소개</Link>
        <Link to="/about/mission">소개/미션</Link>
        <Link to="/about/team">소개/팀</Link>
        <Link to="/service">서비스</Link>
        <Link to="/blog">블로그</Link>
        <Link to="/blog/design/100">블로그 100</Link>
        <Link to="/blog/design/detail?id=200&user=안녕하세요">
          블로그 100 안녕하세요
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          {/* About 관련 */}
          <Route path="/about">
            <Route index element={<About />}></Route>
            <Route path="mission" element={<Mission />}></Route>
            <Route path="team" element={<Team />}></Route>
          </Route>

          <Route path="/service" element={<Service />}></Route>
          {/* Blog 관련 */}
          <Route path="/blog">
            <Route index element={<Blog />}></Route>
            {/* 중첩 겹침 */}
            <Route path="design">
              <Route path=":id" element={<Design />}></Route>
              <Route path="detail?id=1" element={<Detail />}></Route>
            </Route>
          </Route>
          {/* 잘못된 경로로 접근 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Link to="/">홈</Link>
        카피라이터
      </footer>
    </Router>
  );
}
```

- Header,Footer 정도는 컴포넌트로 분리하시길 권장
- src/components/Header.jsx
- src/components/Footer.jsx

## 7.6. components 에 props 전달하기

## 7.7. components 에 props 인 내용 전달하기

```jsx
<Header company={"안녕하세요"} service={"서비스"}>
  <div>안녕하세요</div>
  <div>반가워요</div>
</Header>
```

```jsx
<Footer>{isLogin ? <p> 안녕하세요</p> : <p>안녕히 가세요</p>}</Footer>
```

## 7.8. 레이아웃을 유지하고 Outlet에 출력하기
