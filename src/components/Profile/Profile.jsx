import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  weatherData,
  handleCardClick,
  clothingItems,
  handleAddClick,
}) => {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
      />
    </section>
  );
};

export default Profile;
