import MapDiv from "./MapDiv";
import { useEffect, useRef, useState } from "react";

import axios from "axios";
import SecondHead from "./SecondHead";
import BodyTop from "./BodyTop";
import TicketBody from "./TicketBody";

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

const getRegionList = async function (code) {
  const res = await axios.get("/explore/getregionlist?code=" + code);
  return res.data.data;
};

var allListData = await getAllList();

const Explore = function () {
  //경도,위도,사이즈
  const [mapItude, setMapItude] = useState([]);
  const [mapCode, setMapCode] = useState(0);
  const [regionList, setRegionList] = useState(allListData);
  let regionId = useRef(0);

  useEffect(() => {
    getRegionList(mapCode).then((response) => setRegionList(response));
  }, [mapCode]);

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
                actions={{ setMapItude, setMapCode }}
                states={{ mapItude, mapCode, regionId }}
              />
            </div>

            {/* 축제 목록 리스트 */}
            <div className="col-lg-12">
              <TicketBody
                regionList={regionList}
                setRegionList={setRegionList}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
