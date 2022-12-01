import "../assets/static/stylesheet.css";
import "./Button.css";

function Button({text, onUpdate, status}) {



  return (
    <div className={status? "button-background-yes":"button-background-no"} onClick={onUpdate}>
      <div className="button-text p-4">
        <h5 className="h5"><strong>{text}</strong></h5>
        <p>{status? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default Button;
