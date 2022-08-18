import classes from "./CalcContainer.module.css";

const CalcContainer = (props) => {
  return <div className={classes["calc-container"]}>{props.children}</div>;
};

export default CalcContainer;
