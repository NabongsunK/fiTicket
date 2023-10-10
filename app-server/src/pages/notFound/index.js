import { useNavigate } from "react-router";
import Button from "../../components/common/Button";

function NotFound() {
  return (
    <>
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span>
              <br />
              <br />
              <h2 style={{ color: "#22b3c1" }}>Loca!&nbsp;T</h2>
            </span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Button href="/" title="404 : 홈" />
      </div>
    </>
  );
}

export default NotFound;
