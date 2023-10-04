import { NavLink } from "react-router-dom";

const StaffNavigation = function () {
  return (
    <>
      <div className="staff-nav">
        <nav className="main-nav">
          <ul className="nav">
            <li>
              <NavLink className="admin" to="/staff">
                관리
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/staff/fes_table">
                축제
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/staff/reviews">
                리뷰
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default StaffNavigation;
