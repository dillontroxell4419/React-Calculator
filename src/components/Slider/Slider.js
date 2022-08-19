import "./Slider.scss";


// https://codepen.io/nghh/pen/abWKXEK
const Slider = (props) => {
  return (
    <div className="switch">
      <input id="switch__input" onClick={props.onClick} type="checkbox" />
      <label htmlFor="switch__input" />
    </div>
  );
};

export default Slider;
