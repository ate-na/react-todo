import "./NewTodo.css";

const NewTodo = (props) => {
  const Data = {
    title: "",
    description: "",
    rate: 0,
  };
  const submitPost = (e) => {
    e.preventDefault();
    console.log("data submit", Data);
    props.addNewPost(Data);
    // Data = { title: "", description: "", rate: "" };
  };
  const submitButton = (e) => {
    console.log("value is", e);
  };

  const changeForm = (e) => {
    console.log("value", e.target.value);
    console.log("name", e.target.name);
    Data[e.target.name] = e.target.value;

    // props.addNewPost(Data);
  };
  return (
    <div>
      <form
        onSubmit={submitPost}
        style={
          {
            //   paddingTop: "10px",
            //   display: "flex",
            //   justifyContent: "center",
            //   flexDirection: "column",
            //   border: "1px solid white",
          }
        }
      >
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
          value={Data.title}
          required
          onChange={changeForm}
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
          value={Data.description}
          onChange={changeForm}
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
          value={Data.rate}
          onChange={changeForm}
        />
        {/* </p> */}

        <button type="submit" onSubmit={submitButton}>
          submit
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
