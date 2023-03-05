import { useEffect, useState } from "react";
import TodoList from "./component/TodoList";
import "./App.css";
import NewTodo from "./component/NewTodo";
import Modal from "./component/Modal";

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
  const [isModalvisible, SetIsModalvisible] = useState(true);
  const addNewPost = (data) => {
    console.log("");
    SetTodos((prev) => [...prev, data]);
    // console.log("data", data);
    // todos.push(data);
  };

  const onclose = () => {
    SetIsModalvisible(false);
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
      {isModalvisible ? (
        <Modal onclose={onclose}>
          <NewTodo addNewPost={addNewPost} onclose={onclose} />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
