import { Textfit } from "react-textfit";
import classes from "./Screen.module.css";

const Screen = (props) => {
  return (
    <div
      className={
        props.darkmode ? classes["screen-dark"] : classes["screen-light"]
      }
    >
      <p className={classes["screen-content"]}>{props.value}</p>
    </div>
  );
};

export default Screen;
