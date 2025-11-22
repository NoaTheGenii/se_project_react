export const apiKey = "ed0c4a7b8937d1d63af31989f7a64d6a";
export const coordinates = { latitude: 37.7749, longitude: 122.4194 };

export const weatherTypes = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../images/day/cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../images/day/rainy.svg", import.meta.url).href,
  },

  {
    day: true,
    condition: "fog",
    url: new URL("../images/day/foggy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../images/day/snowy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../images/day/stormy.svg", import.meta.url).href,
  },

  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/clear-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../images/night/cloudy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../images/night/rainy-night.svg", import.meta.url).href,
  },

  {
    day: false,
    condition: "fog",
    url: new URL("../images/night/foggy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../images/night/snowy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../images/night/stormy-night.svg", import.meta.url).href,
  },
];
