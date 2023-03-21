import { useLoaderData } from "react-router-dom";
import Modal from "../component/Modal";
import styles from './Detail.module.css'

const Details = () => {
  const todo = useLoaderData();
  return (
    <>
      {todo ? (
        <Modal>
          <div className={styles.detail}>
            <p className={styles.element}>{todo.title}</p>
            <p className={styles.element}>{todo.description}</p>
            <p className={styles.element}>{todo.rate}</p>
          </div>
        </Modal>
      ) : (
        <p>there is no todo</p>
      )}
    </>
  );
};

export default Details;

export async function loder({ params }) {
  console.log("paramss", params);
  const res = await fetch("http://localhost:3001/api/todo/" + params.id);
  const data = await res.json();
  return data.data;
}
