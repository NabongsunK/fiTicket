import { Link } from "react-router-dom";

const Button = function (props) {
  if (props.isRev) {
    return (
      <div
        className="explore_list_button_rev"
        onClick={() => {
          if (props.onClick) {
            props.onClick();
          }
        }}
      >
        <Link to={props.href} style={props.style}>
          {props.title}
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className="explore_list_button"
        onClick={() => {
          if (props.onClick) {
            props.onClick();
          }
        }}
      >
        <Link to={props.href} style={props.style}>
          {props.title}
        </Link>
      </div>
    );
  }
};
export default Button;
