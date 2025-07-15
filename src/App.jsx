import React, { useState } from "react";
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
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header company={"안녕하세요"} service={"서비스"} setIsLogin={setIsLogin}>
        <div>안녕하세요</div>
        <div>반가워요</div>
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Index first={"안녕하세요."} />}></Route>
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
      <Footer>{isLogin ? <p> 안녕하세요</p> : <p>안녕히 가세요</p>}</Footer>
    </Router>
  );
}

export default App;
