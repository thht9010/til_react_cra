import React from "react";
import ReactDOM from "react-dom/client";
//css
import "./index.css";
import StartPage from "./pages/StartPage";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Comments from "./pages/Comments";
import Test from "./pages/Test";
import RegisterPage from "./pages/RegisterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    {/* <Posts></Posts>
    <Albums></Albums>
    <Photos></Photos>
    <Todos></Todos>
    <Comments></Comments> */}
    <RegisterPage />
  </div>,
);
