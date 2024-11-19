import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }
  return (
    <div className="WeatherForecastPreview">
      <div className="WeatherForecastDay">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={38} />
      <div className="WeatherForecastTemperature">
        <span className="WeatherForecastMax">{maxTemp()}</span>
        <span className="WeatherForecastMin">{minTemp()}</span>
      </div>
    </div>
  );
}
