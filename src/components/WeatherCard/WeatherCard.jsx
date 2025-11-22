import "./WeatherCard.css";
import { weatherTypes } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const weatherType = weatherTypes.filter((type) => {
    return (
      type.condition === weatherData.condition && type.day === weatherData.isDay
    );
  });
  return (
    <section className="weather-card">
      <img
        className="weather-card__image"
        src={weatherType.length > 0 ? weatherType[0].url : weatherTypes[1].url}
        alt="Current weather"
      />
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]}&deg;{currentTemperatureUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
