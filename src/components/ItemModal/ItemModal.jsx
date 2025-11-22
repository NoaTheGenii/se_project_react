import "./ItemModal.css";

const ItemModal = ({
  isOpen,
  onClose,
  card,
  handleContentClick,
  handleDeleteClick,
}) => {
  return (
    <div className={`modal ${isOpen && "modal_is-opened"}`} onClick={onClose}>
      <div
        className="modal__content modal__content_type_preview"
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn modal__close-btn_type_preview"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-info">
            <h2 className="modal__caption">{card.name}</h2>

            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            onClick={handleDeleteClick}
            type="button"
            className="modal__delete-btn"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
