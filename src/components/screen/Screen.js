import { useState } from "react";
import classes from "./Screen.module.css";

const Screen = (props) => {
  return (
    <div className={classes.screen}>
      <p className={classes["screen-content"]}>{props.scrVal}</p>
    </div>
  );
};

export default Screen;
