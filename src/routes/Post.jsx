import { useEffect, useState } from "react";
import TodoList from "../component/TodoList";
// import "./App";
import NewTodo from "../component/NewTodo";
import Modal from "../component/Modal";
import MainHeader from "../component/Mainheader";
import { Outlet, useLoaderData } from "react-router-dom";

const Todos = [
  {
    title: "work",
    rate: 0,
    description: "",
    id: 0,
  },
  {
    title: "x",
    rate: 0,
    description: "",
    id: 1,
  },
  {
    title: "y",
    rate: 0,
    description: "",
    id: 2,
  },
];

function Posts() {
  const todos = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "black",
      }}
    >
      {todos.length === 0 && (
        <p style={{ color: "white" }}>loading posts....</p>
      )}
      <TodoList todos={todos} />
    </div>
  );
}

export default Posts;

export async function loader() {
  const res = await fetch("http://localhost:3001/api/todo", {
    method: "Get",
  });
  const response = await res.json();
  console.log("response", response);

  return response.data;
}
