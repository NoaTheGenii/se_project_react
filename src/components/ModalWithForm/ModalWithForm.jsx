import "./ModalWithForm.css";
import React from "react";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
  handleModalEscape,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__is-opened"}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-btn"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <form className="modal__form">{children}</form>
        <button className="modal__add-btn" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
