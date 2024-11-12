import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul className="Today">
      <li>
        {" "}
        <WeatherDate date={props.data.date} />
      </li>
      <li class="text-capitalize"> {props.data.description}</li>
    </ul>
    <div className="row">
      <div classname="col-6">
        <img
          src="https://www.theweather.com/css/v3/svgs/symbols/color/3.svg"
          alt="mostly cloudy"
          className="Icon"
        />
      </div>
      <div className="col-6">
        <div className="Fix">
          <div className="Float">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemperature celsius={props.data.temperature} />
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
  </div>;
}
