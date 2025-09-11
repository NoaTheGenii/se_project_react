import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  handleContentClick,
}) {
  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`} onClick={onClose}>
      <div className="modal__content" onClick={handleContentClick}>
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-btn"
          type="button"
          onClick={onClose}
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
