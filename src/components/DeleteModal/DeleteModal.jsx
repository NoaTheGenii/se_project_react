import "./DeleteModal.css";

const DeleteModal = ({ isOpen, onClose, handleContentClick, handleDelete }) => {
  return (
    <div className={`modal ${isOpen && "modal_is-opened"}`} onClick={onClose}>
      <div
        className="modal__content modal__content_type_delete"
        onClick={handleContentClick}
      >
        <button
          className="modal__close-btn"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="modal__title modal__title_type_delete">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <form className="modal__form modal__form_type_delete" noValidate>
          <button
            onClick={handleDelete}
            type="submit"
            className="modal__submit-btn modal__submit-btn_type_delete"
          >
            Yes, delete item
          </button>
          <button onClick={onClose} type="button" className="modal__cancel-btn">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteModal;
