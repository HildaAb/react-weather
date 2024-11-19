import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        {forecast.map(function (WeatherForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastPreview data={WeatherForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "0ac953t0o20a266a6d9990b5f3f49241";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
