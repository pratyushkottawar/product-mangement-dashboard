import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal(!showModal);

  return (
    <>
      <button onClick={toggle}> Open Modal </button>
      {showModal && <MyModal toggle={toggle} />}
    </>
  );
};

export default Modal;
