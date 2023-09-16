import { Link } from "react-router-dom";

const SecondHead = function () {
  return (
    <div className="second-page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4>지도에서 축제를 탐색하세요</h4>
            <h2>축제를 찾아 바로 참가하세요</h2>
            <p>
              수많은 축제들이 당신을 기다리고 있습니다.
              <br />
              주저말고 지금 바로 즐기세요
            </p>
            <div className="border-button">
              <Link to="/login" style={{ color: "#fff", borderColor: "#fff" }}>
                로그인
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondHead;
