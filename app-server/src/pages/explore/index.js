import MapDiv from "./MapDiv";
import { useEffect, useRef, useState } from "react";

import axios from "axios";
import SecondHead from "./SecondHead";
import BodyTop from "./BodyTop";
import TicketBody from "./TicketBody";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setMapData } from "../../store/mapSlice";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getAllMap = async function () {
  const res = await axios.get("/explore/getallmap");
  return res.data.data;
};

const getAllList = async function () {
  const res = await axios.get("/explore/getalllist");
  return res.data.data;
};

const getRegionList = async function (code) {
  const res = await axios.get("/explore/getregionlist?code=" + code);
  return res.data.data;
};

const allListData = await getAllList();

const Explore = function () {
  //경도,위도,사이즈
  const mapCode = useSelector((state) => state.myMapSlice.mapCode);
  const [regionList, setRegionList] = useState([]);
  const regionId = useRef(0);
  const dispatch = useDispatch();

  useEffect(() => {
    getRegionList(mapCode).then((response) => setRegionList(response));
  }, [mapCode]);

  useEffect(() => {
    getAllMap().then((response) =>
      dispatch(setMapData({ newMapData: response }))
    );
  }, []);

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
              <MapDiv states={{ regionId }} />
            </div>

            <div className="col-lg-12">
              <Outlet context={{ regionList, setRegionList, allListData }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
