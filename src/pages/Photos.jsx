import React, { useState } from "react";
import PhotosList from "../components/Photos/PhotosList";

function Photos() {
  // js 자리
  const [photosData, setPhotosData] = useState([]);
  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      setPhotosData(result);
    } catch (error) {
      console.log(error);
    }
  }
  //   getPhots();
  function resetList() {
    setPhotosData([]);
  }
  // jsx 자리

  return (
    <div>
      Photos 목록
      <button onClick={getPhotos}>목록 가져오기</button>
      <button onClick={resetList}>목록 초기화</button>
      <div>
        {photosData.map(function (요소, 인덱스) {
          return (
            <PhotosList
              userid={요소.albumId}
              id={요소.id}
              title={요소.title}
              key={인덱스}
            ></PhotosList>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
