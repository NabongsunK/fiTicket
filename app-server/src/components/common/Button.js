import { Link } from "react-router-dom";

const Button = function (props) {
  return (
    <div
      className="explore_list_button"
      onClick={() => {
        props.next();
      }}
    >
      <Link style={{ "margin-top": 0, border: "1px solid white" }}>
        {props.title}
      </Link>
    </div>
  );
};
export default Button;
