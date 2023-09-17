import { Link } from "react-router-dom";
import TicketList from "./TicketList";
import TicketDetailItem from "./TicketDetailItem";
import ExplorePageHeading from "./ExplorePageHeading";
import { useAsync } from "react-async";

import MapDiv from "./MapDiv";
import { useEffect, useState } from "react";

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

const getRegionList = async function (query) {
  const res = await axios.get("/explore/getregionlist?query=" + query);
  return res.data.data;
};

var allListData = await getAllList();

const Explore = function () {
  //경도,위도,사이즈
  const [mapItude, setMapItude] = useState([]);
  const [mapQuery, setMapQuery] = useState();
  const [listData, setListData] = useState(allListData);

  useEffect(() => {
    getRegionList(mapQuery).then((response) => setListData(response));
  }, [mapQuery]);

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
              <MapDiv
                data={mapData}
                actions={{ setMapItude, setMapQuery }}
                states={{ mapItude, mapQuery }}
              />
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
