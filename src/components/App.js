
import React from "react";
import './../styles/App.css';
import Weather from "./weather";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Weather temperature={25} conditions="Sunny" />
    </div>
  )
}

export default App
