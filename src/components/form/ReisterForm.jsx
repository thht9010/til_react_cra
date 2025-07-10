import styled from "@emotion/styled";
import React from "react";
import InputUi from "./InputUi";
import {
  CheckBoxGroup,
  FormLabel,
  ImagePreview,
  ImageUploadButton,
  ImageUploadLabel,
  RadioGroup,
  RadioLabel,
  SelectGroup,
  SelectList,
  SelectOption,
  SubmitButton,
  TextArea,
  TextAreaGroup,
  UploadImageGroup,
} from "./RegisterForm.styled";
// 전역(window) 자리: styled 자리: 리랜더링에서 배제됨.
// styled 자리

function ReisterForm({ formData, errMessage }) {
  // js 자리
  // 이미지 미리보기 기능
  const handlePreviewImg = e => {
    console.log(e.target.files[0]);
    if (file) {
      const 임시주소 = URL.createObjectURL(file);
    }
  };
  // jsx 자리
  return (
    <FormContainer>
      <form>
        <InputUi
          id={"user_name"}
          type="text"
          name={"user_name"}
          value={formData.user_name}
          placeholder="아이디를 입력하세요."
          label="아이디"
        />
        <InputUi
          id={"user_email"}
          type="email"
          name={"user_email"}
          value={formData.user_email}
          placeholder="이메일을 입력하세요."
          label="이메일"
        />
        <InputUi
          id={"user_pass"}
          type="password"
          name={"user_pass"}
          value={formData.user_pass}
          placeholder="비밀번호를 입력하세요."
          label="비밀번호"
        />
        <InputUi
          id={"user_pass_confirm"}
          type="password"
          name={"user_pass_confirm"}
          value={formData.user_pass_confirm}
          placeholder="비밀번호를 확인해주세요."
          label="비밀번호 확인"
        />
        <InputUi
          id={"user_nickname"}
          type="text"
          name={"user_nickname"}
          value={formData.user_nickname}
          placeholder="닉네임을 입력해주세요."
          label="닉네임"
        />
        <InputUi
          id={"user_birth"}
          type="date"
          name={"user_birth"}
          value={formData.user_birth}
          placeholder="생년월일을 입력하세요."
          label="생년월일"
        />
        <FormLabel>성별</FormLabel>
        <RadioGroup>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={"남성"}
              name="gender"
              checked={formData.user_gender === "남성"}
            />
            남성
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={"여성"}
              name="gender"
              checked={formData.user_gender === "여성"}
            />
            여성
          </RadioLabel>
        </RadioGroup>
        <FormLabel>관심사</FormLabel>
        <CheckBoxGroup>
          {formData.user_interest_default.map((item, index) => (
            <CheckBoxLabel key={index}>
              <CheckBoxInput
                type="checkbox"
                name="user_interest"
                value={item}
                checked={formData.user_interest.includes(item)}
              />
              {item}
            </CheckBoxLabel>
          ))}
        </CheckBoxGroup>
        <FormLabel>거주 지역</FormLabel>
        <SelectGroup>
          <SelectList id="user_location" name="user_location">
            {formData.user_location_default.map((item, index))}
            <SelectOption value={`${item}`} key={index}>
              {item}
            </SelectOption>
          </SelectList>
        </SelectGroup>
        <FormLabel>프로필</FormLabel>
        <UploadImageGroup>
          {/* 미리보기 이미지 */}
          {/* {tempUrl ? <ImagePreview src={tempUrl} /> : null} */}
          {formData.user_image_preview && (
            <ImagePreview src={formData.user_image_preview} />
          )}
          {/* <ImagePreview src={tempUrl} /> */}
          <ImageUploadLabel htmlFor="user_image">이미지 선택</ImageUploadLabel>
          <ImageUploadButton
            type="file"
            accept="image/*"
            id="user_image"
            name="user_image"
            onChange={handlePreviewImg}
          />
        </UploadImageGroup>
        <FormLabel>자기소개</FormLabel>
        <TextAreaGroup>
          <TextArea id="user_intro" name="user_intro" rows="4"></TextArea>
        </TextAreaGroup>
        <SubmitButton type="submit">회원가입</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default ReisterForm;
