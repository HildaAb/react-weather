import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "0ac953t0o20a266a6d9990b5f3f49241";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <span className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="SearchInput"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </span>
            <span className="col-3">
              <input type="submit" value="Search" className="SearchSubmit" />
            </span>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
