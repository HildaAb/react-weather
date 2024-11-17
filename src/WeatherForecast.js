import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
