import "./Button.css";
import App from "../../App";
const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
