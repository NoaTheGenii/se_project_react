import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  isOpen,
  onClose,
  onSubmit,
  handleContentClick,
  title,
  buttonText,
  isValid,
}) => {
  return (
    <div className={`modal ${isOpen && "modal_is-opened"}`} onClick={onClose}>
      <div className="modal__content" onClick={handleContentClick}>
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close-btn" type="button" onClick={onClose} />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__add-btn" type="submit" disabled={!isValid}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
