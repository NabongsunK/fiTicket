import axios from "axios";
import { useEffect, useState, useContext } from "react";
import localInfos from "../../data/localInfos.json";
import Map from "./Map";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/pageSlice";
import { setMapCode, setMapItude, setRegionId } from "../../store/mapSlice";
import { useNavigate } from "react-router";

import styles from "./mapdiv.module.css";
//스크립트로 가져온 kakao map api를 윈도우 전역객체에서 받아옴

// 쿼리로 경위도 찾기
const getItude = async function (query = "서울") {
  try {
    const res = await axios.get(
      "https://dapi.kakao.com/v2/local/search/address.json",
      {
        params: {
          query: query,
        },
        headers: {
          Authorization: "KakaoAK 8e8301f6d873da44dfc2345e960bae20",
        },
      }
    );
    //제대로 뽑아왔으면
    if (res.data.documents[0]) {
      return [res.data.documents[0].x, res.data.documents[0].y];
    } else return [126.978652258309, 37.566826004661];
  } catch (error) {
    // 오류 처리
    console.error("오류:", error);
    throw error; // 오류를 상위로 전파하거나 다른 방식으로 처리할 수 있습니다.
  }
};

const MapDiv = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //mapItude를 현재위치로 변경
  const getCurrentPos = function () {
    if (navigator.geolocation) {
      // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
          dispatch(setMapItude({ newMapItude: [lon, lat, 8] }));
        },
        function (error) {
          // 실패했을때 실행
          dispatch(setMapItude({ newMapItude: [35.95, 128.25, 13] }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      dispatch(setMapItude({ newMapItude: [35.95, 128.25, 13] }));
    }
  };

  //쿼리입력되면, 값변경
  const onChangeQuery = async function (e) {
    if (e.target.value) {
      return dispatch(
        setMapItude({ newMapItude: [...(await getItude(e.target.value)), 8] })
      );
    }
  };
  //토글 변경되면, 값변경
  const onChangeToggle = async function (val) {
    dispatch(setPage({ newPage: 1 }));
    if (val === 0) {
      getCurrentPos();
    } else {
      dispatch(
        setMapItude({
          newMapItude: [
            localInfos[val].centerLon,
            localInfos[val].centerLat,
            localInfos[val].localMapLevel,
          ],
        })
      );
    }
    navigate("/explore");
  };

  // TODO: 처음마운트 될때 위치정보 얻기
  useEffect(getCurrentPos, []);

  const LocalSelectList = localInfos.map((localInfo) => (
    <ToggleButton
      // className="m-3"
      id={"tbg-radio" + localInfo.id}
      value={localInfo.id}
      key={localInfo.id}
    >
      {localInfo.localTitle}
    </ToggleButton>
  ));

  return (
    <>
      {/* <div className="form-outline mb-4" onChange={onChangeQuery}>*/}
      {/* <input type="text" id="form2Example1" className="form-control" /> */}
      {/* 여기에 검색도중 추천리스트가 나오게 설정 */}

      {/* <label className="form-label" htmlFor="form2Example1">
          지역
        </label> */}
      {/* </div> */}

      <Map />

      <div className={styles.mytogglegroup}>
        <ToggleButtonGroup
          className="btn-group-justified"
          type="radio"
          name="options"
          defaultValue={0}
          onChange={onChangeToggle}
        >
          {LocalSelectList}
        </ToggleButtonGroup>
      </div>

      {/* <div id="result" /> */}
    </>
  );
};

export default MapDiv;
