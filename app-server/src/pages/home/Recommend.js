import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import localList from "../../data/locallist.json";
import festivalsData from "../../data/_festivals.json";
import { Link } from "react-router-dom";
import styles from "./recommend.module.css";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import axios from "axios";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const areaRec = async function () {
  const res = await axios.get(`/explore/recommends`);
  return res.data;
};

const recList = await areaRec();

const Recommend = function () {
  const [selectedAreaCode, setselectedAreaCode] = useState(1); // 선택한 지역의 ID를 저장하는 상태
  const [festivals, setFestivals] = useState(recList); // 선택한 지역의 행사 정보를 저장하는 상태

  useEffect(() => {
    // 선택한 지역의 ID가 변경될 때마다 해당 지역의 행사 정보
    const selectedLocalFestivals = recList.filter(
      (festival) => festival.area_code == selectedAreaCode
    );
    setFestivals(selectedLocalFestivals);
  }, [selectedAreaCode]);

  const onChangeToggle = (selectedValue) => {
    setselectedAreaCode(selectedValue.target.value);
  };

  const LocalSelectList = localList.map((localItem) => (
    <button
      id={"tbg-radio" + localItem.id}
      type="button"
      value={localItem.area_code}
      key={localItem.id}
      onClick={onChangeToggle}
      // className="item"
      style={{ padding: "8px 10px" }}
    >
      {localItem.localTitle}
    </button>
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
              <h6 style={{ color: "black" }}>{festival.title}</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
  const options = {
    loop: false,
    margin: 0,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 6,
      },
      640: {
        items: 8,
      },
      1280: {
        items: 17,
      },
    },
  };

  return (
    <div className="amazing-deal">
      <div className={styles.container}>
        <div className="row">
          <div className="col-12" style={{ padding: "0px" }}>
            <div className={`container ${styles.containerStyle}`}>
              <div className={styles.slider_content}>
                <div className="row justify-content-center align-items-center">
                  <div className="col-6 align-middle">
                    <h2 className={styles.title}>
                      <em className={styles.emphasis}>지역별 행사 추천</em>
                    </h2>
                  </div>
                </div>
              </div>

              {/* 토글버튼 */}
              <div id={styles.container} className="search-form">
                <form
                  id="search-form"
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    width: "100%",
                    padding: "5px 10px",
                    borderRadius: "8px",
                  }}
                >
                  <OwlCarousel className="owl-theme" {...options}>
                    {LocalSelectList}
                  </OwlCarousel>
                </form>
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
