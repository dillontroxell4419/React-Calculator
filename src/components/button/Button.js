import "./Button.css";
const Button = (props) => {
  return (
    <button
      className={
        !props.darkMode && props.value === "="
          ? props.className + " -dark"
          : props.darkMode
          ? props.className + " btn-dark"
          : props.className + " btn-light"
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
