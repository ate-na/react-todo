import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal = (props) => {
  const navigate = useNavigate();
  const closeModalHandler = (props) => {
    navigate("..");
  };
  return (
    <>
      <div className="backdrop" onClick={closeModalHandler} />
      <dialog open className="modal">
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
