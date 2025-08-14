import "./ItemModal.css";

function ItemModal({ item, onClose }) {
  return (
    <div className="item-modal">
      <div className="item-modal-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ItemModal;
