import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
import Button from "./ui/Button";
import Tag from "./ui/Tag";
import Avator from "./ui/Avator";
import Toast from "./ui/Toast";
import Alert from "./ui/Alert";
import Chip from "./ui/Chip";
import Modal from "./ui/Modal";
import ProgressBar from "./ui/ProgressBar";
import Skeleton from "./ui/Skeleton";
import Tooltip from "./ui/Tooltip";
function Slide() {
  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <Button variant="primary" size="lg">
        기본버튼 : large 버튼
      </Button>
      <Button>기본버튼</Button>
      <br />
      <br />
      <Button variant="primary" size="lg" disabled>
        disabled 버튼
      </Button>
      <br />
      <br />
      <Button variant="danger" size="lg">
        경고버튼 : large 버튼
      </Button>
      <Button variant="danger">경고버튼</Button>
      <br />
      <br />
      <Button variant="success" size="lg">
        기본버튼 : large 버튼
      </Button>
      <Button variant="success">기본버튼</Button>

      <h2>태그 예제</h2>
      <Tag variant="success" rounded={true} size="lg">
        성공
      </Tag>
      <Tag variant="danger" rounded={true} size="lg">
        위험
      </Tag>
      <Tag variant="warning" rounded={true} size="lg">
        경고
      </Tag>
      <Tag variant="info" rounded={true} size="lg">
        정보
      </Tag>
      <Tag>기본</Tag>
      <div>
        <Avator
          src="https://i.pravatar.cc/100"
          alt="큰거"
          size="80px"
          shadow={false}
        />
        <Avator
          src="https://i.pravatar.cc/100"
          alt="중간거"
          size="60px"
          shadow={false}
        />
        <Avator
          src="https://i.pravatar.cc/100"
          alt="작은거"
          size="30px"
          shadow={false}
        />
      </div>
      <div>
        <Toast></Toast>
        <Toast message="안녕하세요" bg="#cccccc" />
      </div>
      <div>
        <Alert>반갑습니다</Alert>
        <Alert type="success">성공입니다</Alert>
        <Alert type="error">에러입니다</Alert>
        <Alert type="hello">안녕하세요</Alert>
        <Alert type="bye">안녕히가세요</Alert>
      </div>
      <div>
        <Chip></Chip>
        <Chip label="React"></Chip>
        <Chip label="JavaScript"></Chip>
        <Chip label="Styled"></Chip>
      </div>
      <div>
        {/* <Modal>
          <h3>모달타이틀</h3>
          <p>모달내용</p>
        </Modal> */}
      </div>
      <div>
        <ProgressBar />
        <ProgressBar percent={30} color="#f00" />
        <ProgressBar percent={50} color="#0f0" />
        <ProgressBar percent={80} color="#00f" />
        <ProgressBar percent={100} />
      </div>
      <div>
        <Skeleton width="80%" height="20px" />
        <Skeleton width="60%" height="10px" />
        <Skeleton width="100%" height="400px" />
      </div>
      <div>
        <Tooltip message="안녕하세요">
          <button>안녕하십니까</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default Slide;
