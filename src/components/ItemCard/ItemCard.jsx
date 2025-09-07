import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <div className="item-card">
      <h2 className="item-card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        src={item.link}
        alt={item.name}
        className="item-card__image"
      />
    </div>
  );
}

export default ItemCard;
