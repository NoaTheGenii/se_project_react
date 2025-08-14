import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, headerData }) {
  return (
    <div className="main">
      <h1>Main Component</h1>
      <p>This is the main content area.</p>
    </div>
  );
}

export default Main;
