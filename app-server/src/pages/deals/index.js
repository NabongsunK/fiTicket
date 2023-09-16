import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import DealsListItem from "./DealsListItem";
import GoToMap from "../../components/common/GoToMap";
import Filter from "./Filter";
import DealsPageHeading from "./DealsPageHeading";

const Deal = function (props) {
  // const list= props.festivals.map(festival => {
  //   return (
  //     <DealsListItem key={festival.id} festival={festival} />
  //   );
  // });

  // 페이징 처리
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const listPerPage = 4;
  const lastPage = Math.floor(
    (listPerPage + props.festivals.length - 1) / listPerPage
  );
  const skip = (page - 1) * listPerPage;

  const pageResult = props.festivals.slice(skip, skip + listPerPage);

  const goPrev = function () {
    if (page === 2) {
      searchParams.delete("page");
    } else if (page > 2) {
      searchParams.set("page", page - 1);
    }
    setSearchParams(searchParams);
  };

  const goNext = function () {
    if (page < lastPage) {
      searchParams.set("page", page + 1);
      setSearchParams(searchParams);
    }
  };

  const list = pageResult.map((festival) => (
    <DealsListItem key={festival.id} festival={festival} />
  ));

  return (
    <>
      <DealsPageHeading />

      {/* 필터 */}
      <Filter />

      <div className="amazing-deals">
        <div className="container">
          <div className="row">
            {/* 추천 행사 타이틀 */}
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>이번주 Loca!T가 추천하는 축제</h2>
                <p>
                  여러 도시들에서 축제가 진행중입니다. 그 중 인기있는 축제들을
                  소개합니다.
                </p>
              </div>
            </div>

            {/* 추천 행사 리스트 */}
            {list}

            {/* pagination */}
            <div className="col-lg-12">
              <ul className="page-numbers">
                <li>
                  <Link to="" onClick={goPrev}>
                    <i className="fa fa-arrow-left"></i>
                  </Link>
                </li>
                <li className="active">
                  <Link to="#">1</Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="" onClick={goNext}>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 배너 행사 찾기 페이지로 이동 */}
      <GoToMap />
    </>
  );
};

export default Deal;
