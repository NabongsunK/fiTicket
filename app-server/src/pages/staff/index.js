import { NavLink, Outlet } from "react-router-dom";
import StaffNavigation from "./StaffNavigation";

const Staff = function () {
  return (
    <>
      <StaffNavigation />

      <Outlet />
    </>
  );
};

export default Staff;
