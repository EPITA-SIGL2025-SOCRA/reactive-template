import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function SeedlingIcon() {
  return <FontAwesomeIcon className="seedling" icon={faSeedling} />;
}

function App() {
  return (
    <div className="app">
      <h1>
        <SeedlingIcon /> Hello SIGL <SeedlingIcon />
      </h1>
    </div>
  );
}

export default App;
