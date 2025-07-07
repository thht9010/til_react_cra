import React from "react";

function Todos() {
  // js 자리
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  getTodos();
  // jsx 자리
  return <div>Todos</div>;
}

export default Todos;
