import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import localList from "../../data/locallist.json";
import festivalsData from "../../data/_festivals.json";
import { next, prev } from "../../store/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import { move } from "../../store/pageSlice";
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
  const [selectedLocal, setSelectedLocal] = useState(0); // 선택한 지역의 ID를 저장하는 상태
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

  const festivalList = festivals.map((festival) => (
    <div key={festival.id} className="col-3">
      <img src={festival.first_image} />
      <h6>{festival.title}</h6>
      {/* 이 밑에 원하는 행사 정보 표시 내용 추가 */}
    </div>
  ));

  console.log(festivals);

  //페이징 처리

  const page = useSelector((state) => state.viewPageSlice.page);

  const listPerPage = 4;
  const lastPage = Math.floor(
    (listPerPage + festivals.length - 1) / listPerPage
  );
  const skip = (page - 1) * listPerPage;

  const pageResult = festivals.slice(skip, skip + listPerPage);

  const totalPage = [];
  for (let i = 1; i <= lastPage; i++) {
    totalPage.push(i);
  }
  const currPage = skip / listPerPage + 1;

  const dispatch = useDispatch();

  return (
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
            <ToggleButtonGroup
              type="radio"
              name="options"
              defaultValue={0}
              onChange={onChangeToggle}
            >
              {LocalSelectList}
            </ToggleButtonGroup>

            {/* 행사 리스트 */}
            <div className="row">{festivalList}</div>
            {/* pagination */}
            <div className="col-lg-12">
              <ul className="page-numbers">
                <li>
                  <Link
                    to=""
                    onClick={() => {
                      if (page > 1) {
                        dispatch(prev({ step: 1 }));
                      }
                    }}
                  >
                    <i className="fa fa-arrow-left"></i>
                  </Link>
                </li>

                {totalPage.map((page) => (
                  <li key={page} className={page === currPage ? "active" : ""}>
                    <Link to="#">{page}</Link>
                  </li>
                ))}

                <li>
                  <Link
                    to=""
                    onClick={() => {
                      if (page < lastPage) {
                        dispatch(next({ step: 1 }));
                      }
                    }}
                  >
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
