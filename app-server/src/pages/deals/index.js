import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../../store/pageSlice";

import DealsListItem from "./DealsListItem";
import GoToMap from "../../components/common/GoToMap";
import Filter from "./Filter";
import DealsPageHeading from "./DealsPageHeading";

import axios from "axios";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getAllList = async function () {
  const res = await axios.get("/explore/getalllist");
  return res.data.data;
};

var fesAllList = await getAllList();

const Deal = function () {
  const [isActive, setActive] = useState("false");

  const alertHandler = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
  };

  /* filtering */
  // 검색어
  const [type, setType] = useState(1);
  const [dealslist, setDealslist] = useState(fesAllList);

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
      <Filter type={type} setType={setType} />

      {/* 알람창 놓고싶은데 넣기*/}
      <div
        className={
          isActive ? "toast toast-3s fade hide" : "toast toast-3s fade show"
        }
        role="alert"
        aria-live="assertive"
        data-delay="3000"
        aria-atomic="true"
        style={{ position: "absolute", right: "40%", zIndex: 200 }}
      >
        <div className="toast-header" style={{ backgroundColor: "#22b3c1" }}>
          <img
            src="assets/images/logo2.png"
            alt=""
            className="img-fluid m-r-5"
            style={{ width: "150px" }}
          />
          <strong className="mr-auto"></strong>
          <small className="text-muted"></small>
        </div>
        <div className="toast-body">
          <strong className="mr-auto">티켓이 장바구니에 담겼습니다.</strong>
        </div>
      </div>

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

            {/* pagination */}
            {/* <div className="col-lg-12">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* 하단 배너 행사 찾기 페이지로 이동 */}
      <GoToMap />
    </>
  );
};

export default Deal;
