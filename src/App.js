import { useState } from "react";
import Button from "./components/button/Button";
import CalcContainer from "./components/main-container/CalcContainer";
import Screen from "./components/screen/Screen";
import Slider from "./components/Slider/Slider";
import "./App.css"
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  // State
  const [calcVals, setCalcVals] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const [darkMode, changeMode] = useState(true);

  // Functions
  // Helpers
  const isNumber = (value) => {
    return typeof value === "number" && isFinite(value);
  };

  // Handlers

  const onNumberHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalcVals({
      ...calcVals,
      num:
        calcVals.num === 0 && value === "0"
          ? "0"
          : calcVals.num % 1 === 0
          ? Number(calcVals.num + value)
          : calcVals.num + value,
      res: !calcVals.sign ? 0 : calcVals.res,
    });
  };

  const onClearHandler = (e) => {
    e.preventDefault();

    setCalcVals({ sign: "", num: 0, res: 0 });
  };

  const onSignHandler = (e) => {
    const value = e.target.innerHTML;
    const result = calcVals.res;
    e.preventDefault();
    setCalcVals({
      ...calcVals,
      sign: value,
      res: !calcVals.res && calcVals.num ? calcVals.num : calcVals.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calcVals.sign && calcVals.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalcVals({
        ...calcVals,
        res:
          calcVals.num === "0" && calcVals.sign === "/"
            ? "Can't divide with 0"
            : math(Number(calcVals.res), Number(calcVals.num), calcVals.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalcVals({
      ...calcVals,
      num: calcVals.num ? calcVals.num * -1 : 0,
      res: calcVals.res ? calcVals.res * -1 : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calcVals.num ? parseFloat(calcVals.num) : 0;
    let res = calcVals.res ? parseFloat(calcVals.res) : 0;

    setCalcVals({
      ...calcVals,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const sliderHandler = (e) => {
    changeMode(!darkMode);
  };

  return (
    <div className={darkMode ? "main main-dark" : "main main-light"}>
      <Slider onClick={sliderHandler} />
      <CalcContainer
      color={darkMode ? "dark" : "light"}>
        <Screen
          color={darkMode ? "dark" : "light"}
          value={calcVals.num ? calcVals.num : calcVals.res}
        />
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              color={darkMode ? "dark" : "light"}
              key={i}
              className={btn === "=" ? "button equals" : "button"}
              value={btn}
              onClick={
                isNumber(btn)
                  ? onNumberHandler
                  : btn === "C"
                  ? onClearHandler
                  : btn === "+" ||
                    btn === "-" ||
                    btn === "X" ||
                    btn === "/" ||
                    btn === "%"
                  ? onSignHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : undefined
              }
            />
          );
        })}
      </CalcContainer>
    </div>
  );
}

export default App;
