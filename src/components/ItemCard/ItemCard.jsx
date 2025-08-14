import "./ItemCard.css";

function ItemCard({ item, onItemClick }) {
  return (
    <div className="item-card" onClick={() => onItemClick(item)}>
      <img src={item.image} alt={item.name} className="item-card__image" />
      <h3 className="item-card__name">{item.name}</h3>
      <p className="item-card__description">{item.description}</p>
      <span className="item-card__price">${item.price}</span>
    </div>
  );
}

export default ItemCard;
