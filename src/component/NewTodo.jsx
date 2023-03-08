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
    props.addNewPost(data);
    props.onclose()
    SetTitle("");
    SetRate(0);
    SetDescription("");
    // Data = { title: "", description: "", rate: "" };
  };

  const changeTitle = (e) => {
    SetTitle(e.target.value);
  };

  const changeDescription = (e) => {
    SetDescription(e.target.value);
  };

  const changeRate = (e) => {
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
