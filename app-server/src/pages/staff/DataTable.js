import DataTableItem from "./DataTableItem";
import axios from "axios";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getAllList = async function () {
  const res = await axios.get("/explore/getalllist");
  return res.data.data;
};

const allListData = await getAllList();

const DataTable = function () {
  const list = allListData.map((festival) => (
    <DataTableItem key={festival.id} festival={festival} />
  ));
  return (
    <div className="data-table-area" style={{ marginTop: "200px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="data-table-list">
              <div className="basic-tb-hd">
                <h2>Basic Example</h2>
                <p>
                  Its just that simple. Turn your simple table into a
                  sophisticated data table and offer your users a nice
                  experience and great features without any effort.
                </p>
              </div>
              <div className="table-responsive">
                <div
                  id="data-table-basic_wrapper"
                  className="dataTables_wrapper"
                >
                  {/* 보이는 행 갯수 정하는 */}
                  <div
                    className="dataTables_length"
                    id="data-table-basic_length"
                  >
                    <label>
                      Show{" "}
                      <select
                        name="data-table-basic_length"
                        aria-controls="data-table-basic"
                        className=""
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                  {/* 검색 */}
                  <div
                    id="data-table-basic_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      Search:
                      <input
                        type="search"
                        className=""
                        placeholder=""
                        aria-controls="data-table-basic"
                      />
                    </label>
                  </div>
                  {/* 테이블 시작 */}
                  <table
                    id="data-table-basic"
                    className="table table-striped dataTable"
                    role="grid"
                    aria-describedby="data-table-basic_info"
                  >
                    {/* 테이블 열 이름 */}
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Age: activate to sort column ascending"
                          style={{ width: "30px" }}
                        >
                          id
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Age: activate to sort column ascending"
                          style={{ width: "30px" }}
                        >
                          rec
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Age: activate to sort column ascending"
                          style={{ width: "30px" }}
                        >
                          d_day
                        </th>

                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Age: activate to sort column ascending"
                          style={{ width: "80px" }}
                        >
                          area
                        </th>

                        <th
                          className="sorting_asc"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                          style={{ width: "200px" }}
                        >
                          title
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Position: activate to sort column ascending"
                          style={{ width: "292px" }}
                        >
                          addr1
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Office: activate to sort column ascending"
                          style={{ width: "50px" }}
                        >
                          first_image
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Start date: activate to sort column ascending"
                          style={{ width: "125px" }}
                        >
                          Start_date
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Start date: activate to sort column ascending"
                          style={{ width: "125px" }}
                        >
                          end_date
                        </th>

                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style={{ width: "116px" }}
                        >
                          over_view
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="data-table-basic"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style={{ width: "116px" }}
                        >
                          tel
                        </th>
                      </tr>
                    </thead>
                    {/* 테이블 내용물 */}
                    <tbody>{list}</tbody>
                    <tfoot>
                      <tr>
                        <th rowSpan="1" colSpan="1">
                          id
                        </th>
                        <th rowSpan="1" colSpan="1">
                          rec
                        </th>
                        <th rowSpan="1" colSpan="1">
                          d_day
                        </th>

                        <th rowSpan="1" colSpan="1">
                          area
                        </th>
                        <th rowSpan="1" colSpan="1">
                          title
                        </th>
                        <th rowSpan="1" colSpan="1">
                          addr1
                        </th>
                        <th rowSpan="1" colSpan="1">
                          first_image
                        </th>
                        <th rowSpan="1" colSpan="1">
                          start_date
                        </th>
                        <th rowSpan="1" colSpan="1">
                          end_date
                        </th>
                        <th rowSpan="1" colSpan="1">
                          over_view
                        </th>
                        <th rowSpan="1" colSpan="1">
                          tel
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div
                    className="dataTables_info"
                    id="data-table-basic_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 57 entries
                  </div>
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="data-table-basic_paginate"
                  >
                    <a
                      className="paginate_button previous disabled"
                      aria-controls="data-table-basic"
                      data-dt-idx="0"
                      tabIndex="0"
                      id="data-table-basic_previous"
                    >
                      Previous
                    </a>
                    <span>
                      <a
                        className="paginate_button current"
                        aria-controls="data-table-basic"
                        data-dt-idx="1"
                        tabIndex="0"
                      >
                        1
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="data-table-basic"
                        data-dt-idx="2"
                        tabIndex="0"
                      >
                        2
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="data-table-basic"
                        data-dt-idx="3"
                        tabIndex="0"
                      >
                        3
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="data-table-basic"
                        data-dt-idx="4"
                        tabIndex="0"
                      >
                        4
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="data-table-basic"
                        data-dt-idx="5"
                        tabIndex="0"
                      >
                        5
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="data-table-basic"
                        data-dt-idx="6"
                        tabIndex="0"
                      >
                        6
                      </a>
                    </span>
                    <a
                      className="paginate_button next"
                      aria-controls="data-table-basic"
                      data-dt-idx="7"
                      tabIndex="0"
                      id="data-table-basic_next"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
