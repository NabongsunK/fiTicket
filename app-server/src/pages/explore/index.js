import { Link } from "react-router-dom";
import TicketList from "./TicketList";
import TicketDetailItem from "./TicketDetailItem";
import ExplorePageHeading from "./ExplorePageHeading";

import festivals from "../../data/festivals.json";
import MapDiv from "./MapDiv";
import { useState } from "react";

import axios from "axios";
import SecondHead from "./SecondHead";
import BodyTop from "./BodyTop";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getAllMap = async function () {
  const res = await axios.get("/explore/getallmap");
  return res.data.data;
};
var mapData = await getAllMap();

const getAllList = async function () {
  const res = await axios.get("/explore/getalllist");
  return res.data.data;
};
var listData = await getAllList();
console.log(listData);

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
              <MapDiv data={mapData} />
            </div>

            {/* 축제 목록 리스트 */}
            <div className="col-lg-12">
              <TicketList festivals={listData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
