import React, { useEffect, useState } from "react";

import classes from "./Calculator.module.css";
import Screen from "../screen/Screen";
import Button from "../button/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = (props) => {
  const [calcVals, setCalcVals] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  // Functions
  // Helpers
  const isNumber = (value) => {
    return typeof value === "number" && isFinite(value);
  };

  function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  function fixNumber(n) {
    return isFloat(n) ? parseFloat(n.toString()).toPrecision(8) : n;
  }

  // Handlers

  const onNumberHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalcVals({
      ...calcVals,
      num:
        calcVals.num.toString().includes("0.") && value === "0"
          ? calcVals.num + value
          : calcVals.num === 0 && value === "0"
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
        res: fixNumber(
          math(Number(calcVals.res), Number(calcVals.num), calcVals.sign)
        ),
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
      res: (num /= Math.pow(100, 1)), 
      sign: "",
    });
  };

  const decimalClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalcVals({
      ...calcVals,
      num: !calcVals.num.toString().includes(".")
        ? calcVals.num + value
        : calcVals.num,
    });
  };

  return (
    <div
      className={
        props.darkMode
          ? classes["calc-container_dark"]
          : classes["calc-container_light"]
      }
    >
      <Screen
        darkMode={props.darkMode}
        value={calcVals.num ? calcVals.num : calcVals.res}
      />
      {btnValues.flat().map((btn, i) => {
        return (
          <Button
            darkMode={props.darkMode}
            key={i}
            className={btn === "=" ? "button equals" : "button"}
            value={btn}
            onClick={
              isNumber(btn)
                ? onNumberHandler
                : btn === "C"
                ? onClearHandler
                : btn === "+" || btn === "-" || btn === "X" || btn === "/"
                ? onSignHandler
                : btn === "="
                ? equalsClickHandler
                : btn === "+-"
                ? invertClickHandler
                : btn === "%"
                ? percentClickHandler
                : btn === "."
                ? decimalClickHandler
                : undefined
            }
          />
        );
      })}
    </div>
  );
};

export default Calculator;
