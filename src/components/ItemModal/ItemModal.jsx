import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, handleContentClick }) {
  return (
    <div
      className={`modal ${activeModal === "preview" && "modal__is-opened"}`}
      onClick={onClose}
    >
      <div
        className="modal__content modal__content_type_image"
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn modal__close-btn_type_preview"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
