import { Link } from "react-router-dom";

const CartLeft = function (props) {
  return (
    <>
      {/* Cart Button */}
      <div className="cart-button">
        <Link id="rightSideCart">
          <img src="/assets/images/core-img/bag2.svg" alt="" />
          <span>{props.cartNo}</span>
        </Link>
      </div>

      {/* user button */}
      <div className="user-button">
        <Link id="rightSideCart">
          <img src="/assets/images/core-img/user2.svg" alt="" />
        </Link>
      </div>

      {/* close */}
      <div className="close-button">
        <Link id="rightSideCart" onClick={props.handleToggle}>
          <i className="fa fa-close fa-close-cart" aria-hidden="true"></i>
        </Link>
      </div>
    </>
  );
};
export default CartLeft;
