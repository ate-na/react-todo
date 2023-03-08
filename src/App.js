import { useEffect, useState } from "react";
import TodoList from "./component/TodoList";
import "./App.css";
import NewTodo from "./component/NewTodo";
import Modal from "./component/Modal";
import MainHeader from "./component/Mainheader";

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
  const [isModalvisible, SetIsModalvisible] = useState(false);

  const addNewPost = (data) => {
    fetch("http://localhost:3001/api/todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log("response", res));
    SetTodos((prev) => [...prev, data]);
  };

  const onclose = () => {
    SetIsModalvisible(false);
  };

  const openModel = () => {
    SetIsModalvisible(true);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3001/api/todo", {
        method: "Get",
      });
      const response = await res.json();
      SetTodos(response.data || []);
    }
    getData();
    // console.log("xxxx", x);
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
      <MainHeader open={openModel} />
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
