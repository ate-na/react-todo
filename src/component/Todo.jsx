import "./Todo.css";
import { TiDeleteOutline } from "react-icons/ti";

const Todo = (props) => {
  const remove = () => {
    console.log("name", props.title);
  };
  return (
    <>
      <div style={{backgroundColor:"rebeccapurple"}}>
        <li
          style={{
            listStyle: "none",
            width: "200px",
            // backgroundColor: "rebeccapurple",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "rebeccapurple",
              justifyContent: "space-between",
              // alignItems:"center",
              maxWidth: "50rem",
              width: "200px",
            }}
          >
            <p style={{backgroundColor:"rebeccapurple",color:"white",paddingLeft:"10px"}}>{props.title}</p>
            {/* <button onClick={remove} /> */}
            <div style={{ cursor: "pointer",color:"black",backgroundColor:"rebeccapurple",paddingRight:"10px" }}>
              <TiDeleteOutline
                style={{ paddingLeft: "100px",backgroundColor:"rebeccapurple" }}
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
