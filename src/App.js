import { useEffect, useState } from "react";
import TodoList from "./component/TodoList";
// import "./App";
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
  const [loading, SetLoading] = useState(false);

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

  const removeSingle = (id) => {
    fetch(`http://localhost:3001/api/todo/${id}`, {
      method: "DELETE",
    }).then((res) => {
      SetLoading(true);
    });
  };

  useEffect(() => {
    async function getData() {
      SetLoading(true);
      const res = await fetch("http://localhost:3001/api/todo", {
        method: "Get",
      });
      const response = await res.json();
      SetTodos(response.data || []);
      SetLoading(false);
    }
    getData();
    // console.log("xxxx", x);
  }, [loading]);
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
      {!loading && <TodoList todos={todos} removeSingle={removeSingle} />}
      {loading && <p style={{ color: "white" }}>loading posts....</p>}

      {isModalvisible ? (
        <Modal onclose={onclose}>
          <NewTodo addNewPost={addNewPost} onclose={onclose} />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
