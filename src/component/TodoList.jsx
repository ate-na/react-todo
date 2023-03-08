import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const removeTodos = (id) => {
    setTodos(prev => prev.filter((e) => e.id !== id));
  };

  return (
    <>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {todos.map((e) => {
          return (
            <li key={e._id}>
              <Todo
                title={e.title}
                rate={e.rate}
                id={e._id}
                removeTodos={removeTodos}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;
