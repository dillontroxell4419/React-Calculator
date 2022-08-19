import classes from "./CalcContainer.module.css";

const CalcContainer = (props) => {
  return (
    <div className={props.color === "dark" ? classes["calc-container_dark"] : classes["calc-container_light"]}>
      {props.children}
    </div>
  );
};

export default CalcContainer;
