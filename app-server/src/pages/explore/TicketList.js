import { Link, useSearchParams } from "react-router-dom";
import TicketListItem from "./TicketListItem";
//import TicketDetailItem from "./TicketDetailItem";
import { useDispatch, useSelector } from "react-redux";
import { next, prev, curr } from "../../store/pageSlice";
import { useState } from "react";

const TicketList = function (props) {
  //페이징 처리

  const page = useSelector((state) => state.viewPageSlice.page);

  const listPerPage = 4;
  const lastPage = Math.floor(
    (listPerPage + props.festivals.length - 1) / listPerPage
  );
  const skip = (page - 1) * listPerPage;

  const pageResult = props.festivals.slice(skip, skip + listPerPage);

  // const goPrev = function () {
  //   if (page === 2) {
  //     searchParams.delete("page");
  //   } else if (page > 2) {
  //     searchParams.set("page", page - 1);
  //   }
  //   setSearchParams(searchParams);
  // };

  // const goNext = function () {
  //   if (page < lastPage) {
  //     searchParams.set("page", page + 1);
  //     setSearchParams(searchParams);
  //   }
  // };

  const dispatch = useDispatch();

  const list = pageResult.map((festival) => {
    return <TicketListItem key={festival.id} festival={festival} />;
  });

  const totalPage = [];
  for (let i = 1; i <= lastPage; i++) {
    totalPage.push(i);
  }
  const currPage = skip / listPerPage + 1;

  return (
    <div className="amazing-deals">
      <div className="container">
        <div className="row">
          {list}

          <div className="search-form">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <form
                    id="explore-search-form"
                    name="gs"
                    method="submit"
                    role="search"
                    action="#"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="축제 찾기"
                        />
                      </div>

                      <div className="col-lg-2">
                        <fieldset>
                          <button className="border-button">
                            <i className="fa fa-search"></i>
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

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
                  <Link to="#" onClick={() => {}}>
                    {page}
                  </Link>
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
  );
};

export default TicketList;
