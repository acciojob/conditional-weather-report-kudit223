
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay temperature={25} conditions="Sunny" />
    </div>
  )
}

export default App
