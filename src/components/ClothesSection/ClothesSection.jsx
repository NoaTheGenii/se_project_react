import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({ clothingItems, handleCardClick, handleAddClick }) => {
  return (
    <div className="profile__clothes-section">
      <div className="profile__header">
        <p className="profile__text">Your items</p>
        <button className="profile__add-btn" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <section className="profile__cards cards">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ClothesSection;
