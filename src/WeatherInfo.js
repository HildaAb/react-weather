import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="TodaysWeather">
        <li className="DaysWeather">
          {" "}
          <WeatherDate date={props.data.date} />
        </li>
        <li class="Description"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div classname="col-6"></div>
        <div className="col-6">
          <div className="Fix">
            <div className="Float">
              <div className="Icon">
                <WeatherIcon code={props.data.icon} size={47} />
              </div>
              <div className="Temperature">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="ConditionList">
              <li>Percipiation:{props.data.precipitation}%</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind:{props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
