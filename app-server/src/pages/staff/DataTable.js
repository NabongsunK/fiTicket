import React, { useEffect, useMemo, useState } from "react";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

import axios from "axios";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

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

const columns = [
  {
    name: "id",
    selector: (row) => row.id,
    sortable: true,
    right: true,
    maxWidth: "10px",
  },
  {
    name: "rec",
    selector: (row) => row.rec,
    sortable: true,
    right: true,
    maxWidth: "10px",
  },
  {
    name: "area",
    selector: (row) => row.area_code,
    sortable: true,
    maxWidth: "10px",
    right: true,
  },
  {
    name: "D-day",
    selector: (row) => row.d_day,
    sortable: true,
    right: true,
    maxWidth: "10px",
  },
  {
    name: "title",
    id: "data-table-title",
    selector: (row) => row.title,
    sortable: true,
    style: { marginLeft: "50px" },
  },
];

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
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
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
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const FestivalDataTable = function () {
  // const list = allListData.map((festival) => (
  //   <DataTableItem key={festival.id} festival={festival} />
  // ));

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
      allListData.filter((festival) => regExp.test(festival.title))
    );
  };

  return (
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
          placeholder="축제 찾기"
          value={keyword}
          onChange={search}
        />
      </div>
      <div>
        <DataTable
          columns={columns}
          data={searchResult}
          defaultSortFieldID={1}
          pagination
          paginationComponent={BootyPagination}
          selectableRows
          expandOnRowClicked
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          responsive
          subHeader
          // subHeaderComponent={subHeaderComponentMemo}
        />
      </div>
    </div>
  );
};

export default FestivalDataTable;
