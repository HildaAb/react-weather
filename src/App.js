import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <div className="App">
        <p>Weather app</p>
        <Weather defaultCity="paris" />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/HildaAb" target="_blank" rel="noreferrer">
          Ilona Aase
        </a>{" "}
        and is{" "}
        <a
          href=" https://github.com/HildaAb/my-app-test"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub{" "}
        </a>{" "}
        and
        <a
          href=" https://react-test-weather.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
