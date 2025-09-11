import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import {
  apiKey,
  coordinates,
  defaultClothingItems,
} from "../../utils/constants";
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
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const preventContentClose = (evt) => {
    evt.stopPropagation();
  };

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
      <Header handleAddClick={handleAddClick} weatherData={weatherData} />
      <Main
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
      />
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
        handleContentClick={preventContentClose}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__radio-legend">
            Select the weather type:
          </legend>
          <label htmlFor="hot" className="modal__radio-label">
            <input
              id="hot"
              type="radio"
              name="weather"
              value="hot"
              className="modal__radio-input"
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__radio-label">
            <input
              id="warm"
              type="radio"
              name="weather"
              value="warm"
              className="modal__radio-input"
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__radio-label">
            <input
              id="cold"
              type="radio"
              name="weather"
              value="cold"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        onClose={closeActiveModal}
        card={selectedCard}
        isOpen={activeModal === "preview"}
        handleContentClick={preventContentClose}
      />
      <Footer />
    </div>
  );
}

export default App;
