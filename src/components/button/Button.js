import "./Button.css";
import App from "../../App";
const Button = (props) => {
  const clickHandler = () => {
    props.onButtonClick(props.value);
  };

  return (
    <button className={props.className} onClick={clickHandler}>
      <p>{props.value}</p>
    </button>
  );
};

export default Button;
