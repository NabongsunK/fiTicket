import { NavLink, Outlet, useNavigate } from "react-router-dom";
import StaffNavigation from "./StaffNavigation";
import { useSelector } from "react-redux";

const Staff = function () {
  const navigate = useNavigate();
  const is_manager = useSelector((state) => state.myLoginSlice.is_manager);

  if (!is_manager) {
    navigate("/");
  }
  return (
    <>
      <StaffNavigation />

      <Outlet />
    </>
  );
};

export default Staff;
