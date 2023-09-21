import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Left = function (props) {
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  return (
    <>
      {/* Cart Button */}
      <div className="cart-button">
        <NavLink id="rightSideCart" onClick={props.actions.goCart}>
          <img src="/assets/images/core-img/bag2.svg" alt="" />
          <span>{props.cartNo}</span>
        </NavLink>
      </div>

      {/* user button */}
      <div className="user-button">
        <Link id="rightSideUser" onClick={props.actions.goUser}>
          <img src="/assets/images/core-img/user2.svg" alt="" />
        </Link>
      </div>

      {/* close */}
      <div className="close-button">
        <Link id="rightSideClose" onClick={props.actions.handleToggle}>
          <i className="fa fa-close fa-close-cart" aria-hidden="true"></i>
        </Link>
      </div>
    </>
  );
};
export default Left;
