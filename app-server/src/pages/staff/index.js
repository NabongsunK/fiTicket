import { NavLink, Outlet } from "react-router-dom";
import StaffNavigation from "./StaffNavigation";
import { useSelector } from "react-redux";

const Staff = function () {
  const is_manager = useSelector((state) => state.myLoginSlice.is_manager);

  if (!is_manager) {
    return <div>...권한이 없습니다.</div>;
  }
  return (
    <>
      <StaffNavigation />

      <Outlet />
    </>
  );
};

export default Staff;
