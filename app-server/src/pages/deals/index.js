import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../../store/pageSlice";

import DealsListItem from "./DealsListItem";
import GoToMap from "../../components/common/GoToMap";
import Filter from "./Filter";
import DealsPageHeading from "./DealsPageHeading";

const Deal = function (props) {
  //페이징 처리

  const page = useSelector((state) => state.viewPageSlice.page);

  const listPerPage = 4;
  const lastPage = Math.floor(
    (listPerPage + props.festivals.length - 1) / listPerPage
  );
  const skip = (page - 1) * listPerPage;

  const pageResult = props.festivals.slice(skip, skip + listPerPage);

  const totalPage = [];
  for (let i = 1; i <= lastPage; i++) {
    totalPage.push(i);
  }
  const currPage = skip / listPerPage + 1;

  const dispatch = useDispatch();

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
                  <li
                    key={page}
                    className={page === currPage ? "active" : ""}
                    onClick={"active"}
                  >
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

      {/* 하단 배너 행사 찾기 페이지로 이동 */}
      <GoToMap />
    </>
  );
};

export default Deal;
