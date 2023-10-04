import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import axios from "axios";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getAllList = async function () {
  const res = await axios.get("/review/reviews");
  return res.data;
};

const allListData = await getAllList();

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}

// RDT exposes the following internal pagination properties
const BootyPagination = function ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
}) {
  //Owl Carousel Settings
  const options = {
    loop: false,
    center: false,
    items: 19,
    margin: 0,
    dots: false,
    nav: false,
  };

  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
            style={{ color: "#000", fontSize: "20px" }}
          >
            <i className="fa fa-caret-left"></i>
          </button>
        </li>
        <OwlCarousel className="owl-theme" {...options}>
          {pageItems.map((page) => {
            const handlePageNumber = (e) => {
              onChangePage(Number(e.target.value));
            };

            const className =
              page === currentPage ? "page-item active" : "page-item";

            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </OwlCarousel>

        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
            style={{ color: "#000", fontSize: "20px" }}
          >
            <i className="fa fa-caret-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const Reviews = function () {
  // const list = allListData.map((festival) => (
  //   <DataTableItem key={festival.id} festival={festival} />
  // ));

  // 축제 더보기 및 수정
  const ExpandedComponent = function ({ data }) {
    const detail = JSON.stringify(data, ["content"], 2);
    const fixed = JSON.stringify(
      data,
      ["id", "ticket_id", "user_id", "best_review"],
      2
    );

    const [article, setArticle] = useState(detail);

    const updateFesDetail = async function (e) {
      e.preventDefault();
      const id = data.id;
      const result = await axios.put(`/explore/fes/${id}`, JSON.parse(article));
      setArticle();
      setSearchResult(result.data);
    };

    return (
      <form onSubmit={updateFesDetail}>
        <div>
          <span>{fixed}</span>
          <textarea
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            style={{ width: "100%", height: "150px" }}
          ></textarea>
        </div>
        <button type="submit">수정</button>
      </form>
    );
  };

  // 추천 토글
  const toggleRecommend = async function (event) {
    try {
      const id = event.target.value;
      const result = await axios.put(`/review/reviews/best/${id}`);
      setSearchResult(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const columns = [
    {
      button: true,
      name: "id",
      // selector: (row) => row.id,
      sortable: true,
      center: true,
      maxWidth: "10px",
      cell: (row) => (
        <div className="App">
          <div className="openbtn text-center">
            <button
              type="button"
              className="btn btn-primary"
              value={row.id}
              onClick={toggleRecommend}
            >
              {row.id}
            </button>
          </div>
        </div>
      ),
    },

    {
      name: "rec",
      selector: (row) => row.best_review,
      sortable: true,
      center: 1,
      maxWidth: "10px",
    },
    {
      name: "rating",
      selector: (row) => row.rating,
      sortable: true,
      maxWidth: "10px",
      center: true,
    },
    {
      name: "fes-id",
      selector: (row) => row.ticket_id,
      sortable: true,
      center: 1,
      maxWidth: "10px",
    },
    {
      name: "축제",
      selector: (row) => row.ticket_name,
      sortable: true,
      center: 1,
      maxWidth: "100px",
    },
    {
      name: "user-id",
      selector: (row) => row.user_id,
      sortable: true,
      center: 1,
      maxWidth: "20px",
    },
    {
      name: "content",
      id: "data-table-title",
      selector: (row) => row.content,
      sortable: true,
      maxWidth: "300px",
      center: 1,
    },
    {
      name: "등록일",
      selector: (row) => row.created_at,
      sortable: true,
      center: 1,
      maxWidth: "150px",
    },
  ];

  /* filtering */
  // 검색어
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState(allListData);

  // 키워드 바뀌면
  const search = function (event) {
    const searchKeyword = event.target.value;
    setKeyword(searchKeyword);
    const regExp = new RegExp(searchKeyword, "i");
    setSearchResult(
      allListData.filter(
        (festival) =>
          regExp.test(festival.ticket_id) || regExp.test(festival.id)
      )
    );
  };

  return (
    <>
      <div className="data-table">
        <div
          id="explore-search-form"
          name="gs"
          method="submit"
          role="search"
          action="#"
        >
          <input
            className="form-control"
            type="text"
            id="value"
            placeholder="리뷰 찾기"
            value={keyword}
            onChange={search}
            style={{ width: "300px", float: "right" }}
          />
        </div>
        <div>
          <DataTable
            columns={columns}
            data={searchResult}
            defaultSortFieldID={1}
            pagination
            paginationComponent={BootyPagination}
            // selectableRows
            expandOnRowClicked
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            responsive
            subHeader
            // subHeaderComponent={subHeaderComponentMemo}
          />
        </div>
      </div>
    </>
  );
};

export default Reviews;
