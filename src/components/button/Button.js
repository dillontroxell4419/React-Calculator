import "./Button.css";
import App from "../../App";
const Button = (props) => {
  return (
    <button className={props.color === "light" && props.value === '=' ? props.className + " -dark" : props.color === "dark" ? props.className + " btn-dark" : props.className + " btn-light"} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
