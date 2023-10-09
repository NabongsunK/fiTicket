import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TeamsPageHeading = function () {
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  return (
    <div className="about-main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <div className="blur-bg"></div>
              <h4>전국 모든 지역행사를 응원합니다</h4>
              <div className="line-dec"></div>
              <h2>Loca!T와 전국 방방곡곡을 누비세요</h2>
              <p>
                여러분 주위는 물론 전국 팔도 곳곳에 수많은 행사들이
                진행중입니다. 주저하지 말고 지금 바로 참여하세요.
              </p>
              <div className="main-button">
                {is_signed ? (
                  <Link to="/explore">Loca!T와 즐기기</Link>
                ) : (
                  <Link to="/login">Loca!T와 즐기기</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPageHeading;
