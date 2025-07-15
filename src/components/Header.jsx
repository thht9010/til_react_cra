import React from "react";
import { Link } from "react-router-dom";

function Header({ company, service }) {
  // js 자리

  // jsx 자리
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header>
      <div onClick={() => setIsLogin(true)}>안녕하세요</div>
      <div onClick={() => setIsLogin(true)}>반가워요</div>
      <Link to="/">로고{company}</Link>
      <Link to="/about">{service}소개</Link>
      <Link to="/about/mission">소개/미션</Link>
      <Link to="/about/team">소개/팀</Link>
      <Link to="/service">서비스</Link>
      <Link to="/blog">블로그</Link>
      <Link to="/blog/design/100">블로그 100</Link>
      <Link to="/blog/design/detail?id=200&user=안녕하세요">
        블로그 100 안녕하세요
      </Link>
    </header>
  );
}

export default Header;
