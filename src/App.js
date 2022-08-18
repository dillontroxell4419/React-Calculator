/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/

import { useState } from "react";
import Button from "./components/button/Button";
import CalcContainer from "./components/main-container/CalcContainer";
import Screen from "./components/screen/Screen";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  // State
  const [curScrVal, setCurScrVal] = useState(0);
  const [calcOperation, setOperation] = useState("");

  // Functions
  const buttonClickHandler = (value) => {
    if(curScrVal === 0){
      setCurScrVal(value.toString())
    }
    
    if (value === "C" || value == "=") {
      return;
    }
    setCurScrVal(curScrVal.toString() + value.toString());
  };

  return (
    <div>
      <CalcContainer>
        <Screen scrVal={curScrVal} />
        {btnValues.flat().map((btn) => {
          return (
            <Button
              className={btn === "=" ? "button equals" : "button"}
              value={btn}
              onButtonClick={buttonClickHandler}
            />
          );
        })}
      </CalcContainer>
    </div>
  );
}

export default App;
