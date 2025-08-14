import "./WeatherCard.css";

function WeatherCard({ weatherData, onCardClick }) {
  return (
    <div className="weather-card" onClick={() => onCardClick(weatherData)}>
      <h3>{weatherData.city}</h3>
      <p>{weatherData.temperature}°C</p>
      <p>{weatherData.condition}</p>
    </div>
  );
}

export default WeatherCard;
