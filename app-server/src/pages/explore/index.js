import { Link } from "react-router-dom";
import TicketList from "./TicketList";
import TicketDetailItem from "./TicketDetailItem";

import festivals from "../../data/festivals.json";
import MapDiv from "./MapDiv";
import { useState } from "react";

const Explore = function () {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
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
                <Link
                  to="/login"
                  style={{ color: "#fff", borderColor: "#fff" }}
                >
                  로그인
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 지도 위 소제목 */}
      <div className="amazing-deals">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>지금 바로 축제를 즐기세요!</h2>
                <p>
                  여러분 주위에 여러 행사들이 열려있습니다.
                  <br />
                  Loca!T와 함께 다양한 축제를 지금 바로 만끽하시길 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 본문*/}
      <div className="reservation-form">
        <div className="container">
          <div className="row">
            {/* 지도 */}
            <div className="col-lg-12">
              <MapDiv />
            </div>

            <div className="detail-area">
              <Link to="#" id="essenceCartBtn" onClick={handleToggle}>
                <span style={{ color: "#22b3c1" }}>상세보기(임시)</span>
              </Link>
            </div>

            {/* 축제 목록 리스트 */}
            <div className="col-lg-12">
              <TicketList festivals={festivals} />
              <TicketDetailItem festival={festivals[0]} />
            </div>
          </div>
        </div>
      </div>

      {/* detail 오버레이 되는 부분 */}
      <div
        className={
          isActive
            ? "detail-bg-overlay"
            : "detail-bg-overlay detail-bg-overlay-on"
        }
      ></div>

      <div
        className={
          isActive ? "bottom-up-detail-area" : "bottom-up-detail-area detail-on"
        }
        style={{ zIndex: "21474899" }}
      >
        {/* close */}
        <div className="close-button">
          <Link to="#" id="rightSideCart" onClick={handleToggle}>
            <i className="fa fa-close fa-close-cart" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="detail-content d-flex">
          <TicketDetailItem festival={festivals[0]} />
        </div>
      </div>
    </>
  );
};

export default Explore;
