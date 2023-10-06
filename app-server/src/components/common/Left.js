import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Left = function (props) {
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  const navigate = useNavigate();
  const cartNo = useSelector((state) => state.myCartSlice.myCarts).length;
  const handleUser = function () {
    if (is_signed) props.actions.goUser();
    else {
      props.actions.handleToggle(() => {
        navigate("/login");
      });
    }
  };
  return (
    <>
      {/* Cart Button */}
      <div className="cart-button">
        <NavLink id="rightSideCart" onClick={props.actions.goCart}>
          <img src="/assets/images/core-img/bag2.svg" alt="" />
          <span>{cartNo}</span>
        </NavLink>
      </div>

      {/* user button */}
      <div className="user-button">
        <Link id="rightSideUser" onClick={handleUser}>
          <img src="/assets/images/core-img/user2.svg" alt="" />
        </Link>
      </div>

      {/* close */}
      <div className="close-button">
        <Link
          id="rightSideClose"
          onClick={() => {
            props.actions.handleToggle();
          }}
        >
          <i className="fa fa-close fa-close-cart" aria-hidden="true"></i>
        </Link>
      </div>
    </>
  );
};
export default Left;
