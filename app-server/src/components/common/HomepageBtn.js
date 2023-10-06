import { Link } from "react-router-dom";

const HomepageBtn = function ({ homepage_src }) {
  const ret = homepage_src ? (
    <div className="explore_list_button">
      <Link to={homepage_src} target="_blank">
        <i className="fa fa-home"></i>
      </Link>
    </div>
  ) : null;
  return ret;
};

export default HomepageBtn;
