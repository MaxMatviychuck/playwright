import React from "react";

import "./Modal.css";

function Modal({ children, onClose }) {
  return (
    <>
      <div className="backdrop" id="backdrop" onClick={onClose}></div>
      <dialog className="modal" open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
