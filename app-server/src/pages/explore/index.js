import { Link } from "react-router-dom";
import TicketList from "./TicketList";
import TicketDetailItem from "./TicketDetailItem";

import festivals from "../../data/festivals.json";
import MapDiv from "./MapDiv";
import { useState } from "react";

import axios from "axios";
import SecondHead from "./SecondHead";
import BodyTop from "./BodyTop";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const signUp = async function () {
  const res = await axios.get("/explore/getallmap");
  return res.data.data;
};
var data = await signUp();

const Explore = function () {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* 두번째 헤더 */}
      <SecondHead />

      {/* 지도 위 소제목 */}
      <BodyTop />

      {/* 본문*/}
      <div className="reservation-form">
        <div className="container">
          <div className="row">
            {/* 지도 */}
            <div className="col-lg-12">
              <MapDiv data={data} />
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
