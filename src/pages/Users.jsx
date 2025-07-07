import React, { useState } from "react";
import UsersList from "../components/Users/UsersList";

function Users() {
  // js 자리
  const [usersData, setUsersData] = useState([]);
  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  function resetList() {
    setUsersData([]);
  }
  // jsx 자리
  return (
    <div>
      <h1>
        Users 목록
        <button onClick={getUsers}>목록 가져오기</button>
        <button onClick={resetList}>목록 가져오기</button>
      </h1>
      <div>
        {usersData.map(function (요소, 인덱스) {
          return <UsersList></UsersList>;
        })}
      </div>
    </div>
  );
}

export default Users;
