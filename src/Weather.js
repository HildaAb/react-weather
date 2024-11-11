import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div classname="Weather">
      <form className="FormInput">
        <div className="row">
          <span className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="SearchInput"
            />
          </span>
          <span className="col-3">
            <input type="submit" value="Search" className="SearchSubmit" />
          </span>
        </div>
      </form>
      <h1>London</h1>
      <ul className="Today">
        <li>Wednesday 08:00</li>
        <li>Mostly cloudy</li>
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
              <span className="Temperature">19</span>
              <span className="Unit">℃|F</span>
            </div>
          </div>
          <div className="col-6">
            <ul className="ConditionList">
              <li>Percipiation:15%</li>
              <li>Humidity: 70%</li>
              <li>Wind:10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
