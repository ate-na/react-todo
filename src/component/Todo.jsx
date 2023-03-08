import "./Todo.css";
import { TiDeleteOutline } from "react-icons/ti";

const Todo = (props) => {
  const remove = () => {
    props.removeTodos(props.id);
  };
  return (
    <>
      <div style={{ backgroundColor: "rebeccapurple" }}>
        <li
          style={{
            listStyle: "none",
            width: "100%",
            display: "flex",
            paddingRight: "20px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "rebeccapurple",
              justifyContent: "space-between",
              maxWidth: "50rem",
              width: "200px",
            }}
          >
            <p
              style={{
                backgroundColor: "rebeccapurple",
                color: "white",
                paddingLeft: "10px",
              }}
            >
              {props.title}
            </p>
            <div
              style={{
                cursor: "pointer",
                color: "black",
                backgroundColor: "rebeccapurple",
                paddingRight: "10px",
              }}
            >
              <TiDeleteOutline
                style={{
                  paddingLeft: "100px",
                  backgroundColor: "rebeccapurple",
                }}
                onClick={remove}
              />
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default Todo;
