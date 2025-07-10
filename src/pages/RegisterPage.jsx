import React, { useState } from "react";
import ReisterForm from "../components/form/ReisterForm";

function RegisterPage() {
  // js 자리
  // 백엔드로 보낼 데이터를 위한 리액트 변수
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_pass: "",
    user_pass_confirm: "",
    user_nickname: "",
    user_birth: "",
    user_gender: "",
    user_interest_default: ["안녕하세요", "반갑습니다", "안녕히가세요"],
    user_interest: [],
    user_location_default: [
      "---지역을 선택하세요---",
      "서울",
      "대구",
      "부산",
      "대전",
      "제주",
    ],
    user_location: "",
    user_intro: "",
    user_image: null,
    user_image_preview: "",
  });
  // 필수 항목 체크 오류 메시지 리액트 변수
  const [errorMessage, setErrorMessage] = useState("");
  // jsx 자리
  return (
    <div>
      <h1>회원가입</h1>
      <ReisterForm formData={formData} errorMessage={errorMessage} />
    </div>
  );
}

export default RegisterPage;
