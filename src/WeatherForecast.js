import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "0ac953t0o20a266a6d9990b5f3f49241";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key={apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div calssName="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thursday</div>
          <div className="WeatherForecastIcon">
            <WeatherIcon code={"clear-sky-day"} size={38} />
          </div>
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastMax">
              <strong>19</strong>
            </span>
            <span className="WeatherForecastMin">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
