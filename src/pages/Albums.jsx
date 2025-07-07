import React, { useState } from "react";
import Albumlist from "../components/albums/Albumlist";

function Albums() {
  // js 자리
  const [albumsData, setAlbumsData] = useState([]);
  async function getAlbums() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const result = await res.json();
      setAlbumsData(result);
    } catch (error) {
      console.log(error);
    }
  }
  //   getAlbums();
  function resetList() {
    setAlbumsData([]);
  }
  // jsx 자리
  return (
    <div>
      <h1>
        Albums 목록
        <button onClick={getAlbums}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h1>
      <div>
        {albumsData.map(function (요소, 인덱스) {
          return (
            <Albumlist
              userid={요소.userId}
              id={요소.id}
              title={요소.title}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
