import Modal from "../component/Modal";
import "../component/NewTodo.css";
import styles from './Detail.module.css'
import { Form, Link, redirect } from "react-router-dom";

const CreateTodo = (props) => {
  return (
    <Modal>
      <Form method="post">
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
        <input type="text" id="title" name="title" required />
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
        <textarea type="text" id="description" name="description" required />
        {/* </p> */}

        {/* <p> */}
        <label
          htmlFor="body"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          Rate
        </label>
        <input type="number" id="rate" name="rate" required />
        {/* </p> */}
        <div className="btn">
          <button className="button" type="submit">
            submit
          </button>
          <Link className="button" to={"/"}>
            cancel
          </Link>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateTodo;

export async function action(data) {
  console.log("data is", data);
  const formData = await data.request.formData();
  console.log("formData", formData);
  const x = Object.fromEntries(formData);
  console.log("xx", x);
  await fetch("http://localhost:3001/api/todo", {
    method: "POST",
    body: JSON.stringify(x),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
