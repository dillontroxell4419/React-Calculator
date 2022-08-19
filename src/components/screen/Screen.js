import { useState } from "react";
import classes from "./Screen.module.css";

const Screen = (props) => {
  return (
    <div className={props.color === "dark" ? classes["screen-dark"] : classes["screen-light"]}>
      <p className={classes["screen-content"]}>{props.value}</p>
    </div>
  );
};

export default Screen;
