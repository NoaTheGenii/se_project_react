import "./WeatherCard.css";
import { weatherTypes } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherType = weatherTypes.filter((type) => {
    return (
      type.condition === weatherData.condition && type.day === weatherData.isDay
    );
  });
  console.log(weatherData.condition, weatherData.isDay);
  return (
    <section className="weather-card">
      <img className="weather-card__image" src={weatherType[0].url}></img>
      <p className="weather-card__temp">{weatherData.temp.F}&deg;F</p>
    </section>
  );
}

export default WeatherCard;
