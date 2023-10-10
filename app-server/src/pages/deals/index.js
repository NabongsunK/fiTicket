import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../../store/pageSlice";

import DealsListItem from "./DealsListItem";
import GoToMap from "../../components/common/GoToMap";
import Filter from "./Filter";
import DealsPageHeading from "./DealsPageHeading";

import axios from "axios";
import PopUp from "../../components/common/PopUp";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getAllList = async function () {
  const res = await axios.get("/explore/getalllist");
  return res.data.data;
};

var fesAllList = await getAllList();

const Deal = function () {
  const [isActive, setIsActive] = useState(false);
  const [popText, setPopText] = useState("");

  const alertHandler = function (title) {
    setPopText(title);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  /* filtering */
  // 검색어
  const [type, setType] = useState(1);
  const [dealslist, setDealslist] = useState([]);

  // 분야 바뀌면
  useEffect(() => {
    const regExp = new RegExp(type, "i");
    setDealslist(fesAllList.filter((festival) => regExp.test(festival.deals)));
  }, [type]);

  const list = dealslist.map((festival) => (
    <DealsListItem
      key={festival.id}
      festival={festival}
      alertHandler={alertHandler}
      showImage={false}
    />
  ));

  return (
    <>
      <DealsPageHeading />

      {/* 필터 */}
      <Filter setType={setType} />

      <PopUp body={popText} isActive={isActive} />

      <div className="amazing-deals" style={{ marginBottom: "200px" }}>
        <div className="container">
          <div className="row">
            {/* 추천 행사 타이틀 */}
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>Loca!T가 추천하는 축제 Top 6!!</h2>
                <p>
                  여러 지역들에서 축제가 진행중입니다. 그 중 인기있는 축제들을
                  소개합니다.
                </p>
              </div>
            </div>

            {/* 추천 행사 리스트 */}
            {list}
          </div>
        </div>
      </div>

      {/* 하단 배너 행사 찾기 페이지로 이동 */}
      <GoToMap />
    </>
  );
};

export default Deal;
