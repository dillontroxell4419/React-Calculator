import { useState } from "react";

import Calculator from "./components/calculator/Calculator";
import Slider from "./components/Slider/Slider";
import "./App.css";

function App() {
  const [darkMode, changeMode] = useState(true);

  const sliderHandler = (e) => {
    changeMode(!darkMode);
  };

  return (
    <div className={darkMode ? "main main-dark" : "main main-light"}>
      <Slider onClick={sliderHandler} />
      <Calculator darkMode={darkMode} />
    </div>
  );
}

export default App;
