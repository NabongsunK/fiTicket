import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = function () {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        className={
          isActive ? "cart-bg-overlay" : "cart-bg-overlay cart-bg-overlay-on"
        }
      ></div>

      <div
        className={
          isActive ? "right-side-cart-area" : "right-side-cart-area cart-on"
        }
      >
        {/* Cart Button  */}
        <div className="cart-button">
          <Link to="#" id="rightSideCart" onClick={handleToggle}>
            <img src="/assets/images/core-img/bag2.svg" alt="" /> <span>3</span>
          </Link>
        </div>

        <div className="cart-content d-flex">
          {/* Cart List Area */}
          <div className="cart-list">
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <Link to="#" className="product-image">
                <img
                  src="/assets/images/product-img/product-1.jpg"
                  className="cart-thumb"
                  alt=""
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </Link>
            </div>

            {/* Single Cart Item */}
            <div className="single-cart-item">
              <Link to="#" className="product-image">
                <img
                  src="/assets/images/product-img/product-2.jpg"
                  className="cart-thumb"
                  alt=""
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </Link>
            </div>

            {/* Single Cart Item */}
            <div className="single-cart-item">
              <Link to="#" className="product-image">
                <img
                  src="/assets/images/product-img/product-3.jpg"
                  className="cart-thumb"
                  alt=""
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="cart-amount-summary">
            <h2>Summary</h2>
            <ul className="summary-table">
              <li>
                <span>subtotal:</span> <span>$274.00</span>
              </li>
              <li>
                <span>delivery:</span> <span>Free</span>
              </li>
              <li>
                <span>discount:</span> <span>-15%</span>
              </li>
              <li>
                <span>total:</span> <span>$232.00</span>
              </li>
            </ul>
            <div className="checkout-btn mt-100">
              <Link to="checkout.html" className="btn essence-btn">
                check out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
