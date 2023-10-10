import { Link } from "react-router-dom";

const Button = function (props) {
  if (props.homepage && !props.href) {
    return "";
  }
  if (props.isRev) {
    return (
      <div
        className="explore_list_button_rev"
        value={props.value}
        style={props.divStyle}
        onClick={(e) => {
          if (props.onClick) {
            props.onClick(e);
          }
        }}
      >
        <Link to={props.href} style={props.style} data-value={props.value}>
          {props.title}
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className="explore_list_button"
        value={props.value}
        style={props.divStyle}
        onClick={(e) => {
          if (props.onClick) {
            props.onClick(e);
          }
        }}
      >
        <Link to={props.href} style={props.style} data-value={props.value}>
          {props.title}
        </Link>
      </div>
    );
  }
};
export default Button;
