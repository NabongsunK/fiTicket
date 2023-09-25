import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import localList from "../../data/locallist.json";
import festivalsData from "../../data/_festivals.json";
import { Link } from "react-router-dom";

import axios from "axios";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const areaRec = async function () {
  const res = await axios.get(`/explore/recommends`);
  return res.data;
};

const recList = await areaRec();

const Recommend = function () {
  const [selectedLocal, setSelectedLocal] = useState(1); // 선택한 지역의 ID를 저장하는 상태
  const [festivals, setFestivals] = useState(recList); // 선택한 지역의 행사 정보를 저장하는 상태

  useEffect(() => {
    // 선택한 지역의 ID가 변경될 때마다 해당 지역의 행사 정보
    const selectedLocalFestivals = recList.filter(
      (festival) => festival.area_code == selectedLocal
    );
    setFestivals(selectedLocalFestivals);
  }, [selectedLocal]);

  const onChangeToggle = (selectedValue) => {
    setSelectedLocal(selectedValue);
  };

  const LocalSelectList = localList.map((localItem) => (
    <ToggleButton
      id={"tbg-radio" + localItem.id}
      value={localItem.area_code}
      key={localItem.id}
    >
      {localItem.localTitle}
    </ToggleButton>
  ));

  const poster = festivals.first_image;

  const festivalList = festivals.map((festival) => (
    <div key={festival.id} className="col-lg-3">
      <div className="item">
        <div className="row">
          <div
            className="col-12"
            style={{
              padding: "0 5px",
              overflow: " hidden",
              width: "100%",
              height: "200px",
            }}
          >
            <Link to={`/explore/${festival.id}`}>
              <div
                className="image"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url("${festival.first_image}")`,
                  backgroundSize: "cover",
                  borderRadius: "23px 0 23px 0",
                }}
              ></div>
            </Link>
          </div>
          <div className="w-100"></div>
          <div className="col-12 text-center">
            <Link to={`/explore/${festival.id}`}>
              <h6>{festival.title}</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="amazing-deal">
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div
                className="slider-content"
                style={{
                  padding: "10px",
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "7px",
                  backgroundColor: "#22b3c1",
                }}
              >
                <div className="row justify-content-center align-items-center">
                  <div className="col-5 align-middle">
                    <h2 style={{ margin: "0", color: "#fff" }}>
                      <em style={{ color: "#fff" }}>지역별 행사 추천</em>
                    </h2>
                  </div>
                </div>
              </div>

              {/* 토글버튼 */}
              <div className="container text-center" style={{ margin: "5px" }}>
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  defaultValue={0}
                  onChange={onChangeToggle}
                >
                  {LocalSelectList}
                </ToggleButtonGroup>
              </div>

              {/* 행사 리스트 */}
              <div className="row">{festivalList}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
