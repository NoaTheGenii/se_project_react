import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Profile from "../Profile/Profile";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { addItem, getItems, deleteItem } from "../../utils/api";
import { apiKey, coordinates } from "../../utils/constants";
import { Routes, Route } from "react-router-dom";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 75, C: 24 },
    city: "",
    condition: "cloudy",
    isDay: true,
    url: "../../images/day/cloudy.svg",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteClick = () => {
    setActiveModal("delete-confirmation");
  };

  const handleDelete = () => {
    const cardId = selectedCard._id;

    deleteItem(cardId)
      .then(() => {
        const updatedItems = clothingItems.filter((item) => item.id !== cardId);
        setClothingItems(updatedItems);
        setActiveModal("");
      })
      .catch(console.error);
  };

  const handleCardSumbit = (inputValues, resetForm) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    };

    addItem(newCardData)
      .then((addedCard) => {
        setClothingItems([addedCard, ...clothingItems]);
        resetForm();
        setActiveModal("");
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const preventContentClose = (evt) => {
    evt.stopPropagation();
  };

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items.reverse());
      })
      .catch(console.error);
  }, [setClothingItems]);

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const exitModalByEscape = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };
    if (activeModal) {
      document.addEventListener("keydown", exitModalByEscape);
    }

    return () => {
      document.removeEventListener("keydown", exitModalByEscape);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                handleCardClick={handleCardClick}
                clothingItems={clothingItems}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                weatherData={weatherData}
                handleCardClick={handleCardClick}
                clothingItems={clothingItems}
                handleAddClick={handleAddClick}
              />
            }
          />
        </Routes>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          handleContentClick={preventContentClose}
          onAddItem={handleCardSumbit}
        />
        <ItemModal
          onClose={closeActiveModal}
          card={selectedCard}
          isOpen={activeModal === "preview"}
          handleContentClick={preventContentClose}
          handleDeleteClick={handleDeleteClick}
        />
        <DeleteModal
          isOpen={activeModal === "delete-confirmation"}
          onClose={closeActiveModal}
          handleContentClick={preventContentClose}
          handleDelete={handleDelete}
        />
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
