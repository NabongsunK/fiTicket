import DataTable from "./DataTable";

import axios from "axios";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const StaffONly = function () {
  return (
    <>
      <DataTable />
    </>
  );
};

export default StaffONly;
