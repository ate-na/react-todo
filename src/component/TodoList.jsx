import Todo from "./Todo";

const TodoList = ({ todos, removeSingle }) => {

  return (
    <>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {todos &&
          todos.map((e) => {
            return (
              <li key={e.id}>
                <Todo
                  title={e.title}
                  rate={e.rate}
                  id={e.id}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default TodoList;
