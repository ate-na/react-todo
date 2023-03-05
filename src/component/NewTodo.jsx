import { useState } from "react";
import "./NewTodo.css";

const NewTodo = (props) => {
  const [title, SetTitle] = useState("");
  const [rate, SetRate] = useState(0);
  const [description, SetDescription] = useState("");

  const submitPost = (e) => {
    e.preventDefault();
    let data = {
      title: title,
      rate: rate,
      description: description,
    };
    console.log("data is", data);
    props.addNewPost(data);
    // Data = { title: "", description: "", rate: "" };
  };

  const changeTitle = (e) => {
    // console.log("title", e.target.value);
    SetTitle(e.target.value);
  };

  const changeDescription = (e) => {
    console.log("Description", e.target.value);
    SetDescription(e.target.value);
  };

  const changeRate = (e) => {
    console.log("rate", e.target.value);
    SetRate(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitPost}>
        {/* <p> */}
        <label
          htmlFor="body"
          style={{
            color: "black",
            paddingBottom: "20px",
          }}
        >
          title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          required
          onChange={changeTitle}
        />
        {/* </p> */}

        {/* <p> */}
        <label
          htmlFor="body"
          style={{
            color: "black",
            paddingBottom: "20px",
          }}
        >
          description
        </label>
        <textarea
          type="text"
          id="description"
          name="description"
          required
          value={description}
          onChange={changeDescription}
        />
        {/* </p> */}

        {/* <p> */}
        <label
          htmlFor="body"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          Rate
        </label>
        <input
          type="number"
          id="rate"
          name="rate"
          required
          value={rate}
          onChange={changeRate}
        />
        {/* </p> */}
        <div className="btn">
          <button type="submit">submit</button>
          <button onClick={props.onclose}>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
