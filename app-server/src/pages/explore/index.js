import MapDiv from "./MapDiv";
import { useEffect, useRef, useState } from "react";

import axios from "axios";
import SecondHead from "./SecondHead";
import BodyTop from "./BodyTop";
import TicketBody from "./TicketBody";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setMapData, setRegionId } from "../../store/mapSlice";
import { setAllList, setRegionList } from "../../store/pageSlice";
import localInfos from "../../data/localInfos.json";

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

// x:경도 y:위도 로 지역찾기
const getAdress = async function (x, y) {
  try {
    const res = await axios.get(
      "https://dapi.kakao.com/v2/local/geo/coord2regioncode.json",
      {
        params: {
          x: x,
          y: y,
        },
        headers: {
          Authorization: "KakaoAK 8e8301f6d873da44dfc2345e960bae20",
        },
      }
    );
    if (res.data.documents[0].region_1depth_name) {
      return res.data.documents[0].region_1depth_name;
    } else {
      return false;
    }
  } catch (error) {
    // 오류 처리
    console.error("오류:", error);
    throw error; // 오류를 상위로 전파하거나 다른 방식으로 처리할 수 있습니다.
  }
};

const getRegionId = function (regionName) {
  var ret = 2;
  localInfos.forEach((localInfo) => {
    if (localInfo.region_1depth_name == regionName) {
      ret = localInfo.id;
    }
  });
  return ret;
};

const Explore = function () {
  //경도,위도,사이즈
  const mapItude = useSelector((state) => state.myMapSlice.mapItude);
  const regionId = useSelector((state) => state.myMapSlice.regionId);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  // 처음 랜더링되면
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터를 가져온 후에 Redux 상태를 업데이트합니다.
        dispatch(setAllList({ newAllList: await getAllList() }));
        dispatch(setMapData({ newMapData: await getAllMap() }));

        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정
      } catch (error) {
        console.error("데이터를 불러오는 동안 오류 발생:", error);
        setLoading(false); // 에러 발생 시에도 로딩 상태를 false로 설정
      }
    };

    fetchData();
  }, []);

  // mapItude가 바뀌면
  useEffect(() => {
    const setMap = async () => {
      // mapItude가 없을경우(첫렌더링)
      if (!mapItude[0]) return;
      // 전국일경우
      if (mapItude[1] == 35.950001001) {
        dispatch(setRegionId({ newRegionId: 1 }));
        return;
      }
      const regionName = await getAdress(mapItude[0], mapItude[1]);
      if (!regionName) return;
      dispatch(setRegionId({ newRegionId: getRegionId(regionName) }));
    };
    setMap();
  }, [mapItude]);

  // regionId가 바뀔경우(토글로 인해)
  useEffect(() => {
    // regionList를 새로 가지고 온다.
    const getList = async () => {
      dispatch(
        setRegionList({
          newRegionList: await getRegionList(localInfos[regionId].area_code),
        })
      );
    };
    getList();
  }, [regionId]);

  // 로딩 중이면 로딩 메시지를 보여줍니다.
  if (loading) {
    return <div>Loading...</div>;
  }
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
              <MapDiv />
            </div>

            <div className="col-lg-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
