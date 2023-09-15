import { Link } from "react-router-dom";

const GoToMap = function () {
  return (
    <div className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>여러분 근처에 행사가 진행중입니다</h2>
            <h4>지도에서 축제를 찾고 바로 참가해 보세요</h4>
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
