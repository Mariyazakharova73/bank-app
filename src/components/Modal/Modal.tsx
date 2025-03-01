import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`modal ${isOpen ? "modal--opened" : ""}`}
      onClick={onClose}
      role="dialog"
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button
            className="modal__close-btn"
            onClick={onClose}
          ></button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
