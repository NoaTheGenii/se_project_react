class WeatherApi {
  constructor(key) {
    this.key = key;
    this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  }
}

// if (temperature >= 86) {
//   return "hot";
// } else if (temperature >= 66) {
//   return "warm";
// } else {
//   return "cold";
// }

export default WeatherApi;
