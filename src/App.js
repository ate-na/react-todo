import { useEffect, useState } from "react";
import TodoList from "./component/TodoList";
import "./App.css";
import NewTodo from "./component/NewTodo";

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

function App() {
  const [todos, SetTodos] = useState([]);

  const addNewPost = (data) => {
    console.log("");
    SetTodos((prev) => [...prev, data]);
    // console.log("data", data);
    // todos.push(data);
  };

  useEffect(() => {
    SetTodos(Todos);
  }, []);
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
      <TodoList todos={todos} setTodos={SetTodos} />
      <NewTodo addNewPost={addNewPost} />
    </div>
  );
}

export default App;
