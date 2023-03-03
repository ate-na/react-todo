import Todo from "./Todo";

const TodoList = ({ todos, SetTodos }) => {
  // remove(e){
  //   SetTodos((prevSate)=>prevSate.map((e)=>e.id!=1))
  // }
  return (
    <>
      <div>
        {todos.map((e) => {
          console.log("element", e);
          return (
            // style={{
            //   display: "flex",
            //   flexDirection: "column",

            //   padding: "10px",
            // }}
            <Todo title={e.title} rate={e.rate} key={e.id} />
          );
        })}
      </div>
    </>
  );
};
export default TodoList;
