import { Link } from "react-router-dom";

const GoToMap = function () {
  return (
    <div className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>Are You Looking To Travel ?</h2>
            <h4>Make A Reservation By Clicking The Button</h4>
          </div>
          <div className="col-lg-4">
            <div className="border-button">
              <Link to="/explore">지도에서 행사 찾기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoToMap;
