import "../assets/static/stylesheet.css";
import "./Button.css";

function Button(props) {
  return (
    <div className="button-background">
      <div className="button-text">
        <p className="titles">{props.text}</p>
        <p>True</p>
      </div>
    </div>
  );
}

export default Button;
