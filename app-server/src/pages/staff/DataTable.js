import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

import areaCode from "../../data/locallist.json";
import CodeTable from "./CodeTable";

import axios from "axios";
import TypeTable from "./TypeTable";

const getAllList = async function () {
  const res = await axios.get("/explore/getalllist");
  return res.data.data;
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
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  // 페이지 갯수
  const lastPage = pageItems.length;
  const totalPage = [];
  for (
    let i = Math.max(1, currentPage - 5);
    i <= Math.min(lastPage, Math.max(currentPage + 4, 10));
    i++
  ) {
    totalPage.push(i);
  }

  while (totalPage.length < 10) {
    if (totalPage[0] == 1) {
      if (totalPage || totalPage[totalPage.length - 1] == lastPage) {
        break;
      }
      totalPage.push(totalPage[totalPage.length - 1] + 1);
    } else {
      if (totalPage[0]) totalPage.unshift(totalPage[0] - 1);
      else break;
    }
  }
  // 페이지 버튼
  const pageButtons = totalPage.map((page) => {
    const className = page === currentPage ? "page-item active" : "page-item";

    return (
      <li key={page} className={className}>
        <button className="page-link" onClick={handlePageNumber} value={page}>
          {page}
        </button>
      </li>
    );
  });

  return (
    <nav>
      <ul className="pagination" style={{ justifyContent: "center" }}>
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
        {pageButtons}
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

const FestivalDataTable = function () {
  // const list = allListData.map((festival) => (
  //   <DataTableItem key={festival.id} festival={festival} />
  // ));

  // 지역 코드 표시
  const code = areaCode.map((list) => (
    <CodeTable key={list._key} list={list} />
  ));
  // deals type
  var dealsType = [
    { type: "기간 임박", code: 1 },
    { type: "먹거리", code: 2 },
    { type: "체험", code: 3 },
    { type: "공연", code: 4 },
    { type: "전시", code: 5 },
  ];
  const type = dealsType.map((item) => (
    <TypeTable key={item._key} item={item} />
  ));
  // 축제 더보기 및 수정
  const ExpandedComponent = function ({ data }) {
    const detail = JSON.stringify(
      data,
      [
        // "id",
        "addr1",
        "addr2",
        "first_image",
        "first_image2",
        "tel",
        "title",
        "event_start_date",
        "event_end_date",
        "home_page",
        "over_view",
        // "map_x",
        // "map_y",
        // "rec",
        "area_code",
        "price",
        "deals",
      ],
      2
    );
    const fixed = JSON.stringify(data, ["id", "map_x", "map_y", "rec"], 2);

    const [article, setArticle] = useState(detail);

    const updateFesDetail = async function (e) {
      e.preventDefault();
      const id = data.id;
      // console.log(JSON.parse(article));
      console.log(article);
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
            style={{ width: "100%", height: "450px" }}
          ></textarea>
        </div>
        <button type="submit">수정</button>
      </form>
    );
  };

  // 추천 토글
  const toggleRecommend = async function (event) {
    try {
      console.log(event.target.value);
      const id = event.target.value;
      const result = await axios.put(`/explore/rec/${id}`);
      setSearchResult(result.data);
    } catch (err) {
      console.error(err);
    }
  };
  const columns = [
    {
      button: true,
      name: "축제 id",
      selector: (row) => row.id,
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
      name: "추천",
      selector: (row) => row.rec,
      sortable: true,
      center: 1,
      maxWidth: "10px",
      cell: (row) =>
        row.rec == 1 ? (
          <div>
            <i className="fa fa-thumbs-up" style={{ color: "#22b3c1" }}></i>
          </div>
        ) : (
          <div>
            <i className="fa fa-thumbs-down"></i>
          </div>
        ),
    },
    {
      name: "지역코드",
      selector: (row) => row.area_code,
      sortable: true,
      maxWidth: "10px",
      center: true,
    },
    {
      name: "D-day",
      selector: (row) => row.d_day,
      sortable: true,
      center: 1,
      maxWidth: "10px",
    },
    {
      name: "end-date",
      selector: (row) => row.event_end_date,
      sortable: true,
      center: 1,
      maxWidth: "20px",
    },
    {
      name: "축제명",
      id: "data-table-title",
      selector: (row) => row.title,
      sortable: true,
      maxWidth: "300px",
      center: 1,
    },
    {
      name: "가격",
      selector: (row) => "₩ " + row.price,
      sortable: true,
      center: 1,
      maxWidth: "40px",
    },
    {
      name: "분야",
      selector: (row) => row.deals,
      sortable: true,
      center: 1,
      maxWidth: "40px",
    },
  ];

  /* filtering */
  // 검색어
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState(allListData);
  const [deals, setDeals] = useState("");

  // 키워드 바뀌면
  const search = function (event) {
    const searchKeyword = event.target.value;
    setKeyword(searchKeyword);
    const regExp = new RegExp(searchKeyword, "i");
    setSearchResult(
      allListData.filter(
        (festival) => regExp.test(festival.title) || regExp.test(festival.id)
      )
    );
  };
  const search2 = function (event) {
    const searchKeyword = event.target.value;
    setDeals(searchKeyword);
    const regExp = new RegExp(searchKeyword);
    setSearchResult(
      allListData.filter((festival) => regExp.test(festival.area_code))
    );
  };

  return (
    <>
      <div className="data-table">
        <div
          className=" col-10"
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
            placeholder="지역 코드"
            value={deals}
            onChange={search2}
            style={{ width: "120px", float: "right" }}
          />
          <input
            className="form-control"
            type="text"
            id="value"
            placeholder="축제 찾기"
            value={keyword}
            onChange={search}
            style={{ width: "300px", float: "right" }}
          />
        </div>
        <div className="area_code">{code}</div>
        <div className="deals_type">{type}</div>
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
            // subHeader
            // subHeaderComponent={subHeaderComponentMemo}
          />
        </div>
      </div>
    </>
  );
};

export default FestivalDataTable;
