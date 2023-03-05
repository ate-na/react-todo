import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onclose} />
      <dialog open className="modal">
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
