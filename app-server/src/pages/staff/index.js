import FestivalDataTable from "./DataTable";

import axios from "axios";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const StaffONly = function () {
  return (
    <>
      <FestivalDataTable />
    </>
  );
};

export default StaffONly;
