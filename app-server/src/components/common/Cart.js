import { Link } from "react-router-dom";

const Cart = function (props) {
  return (
    <>
      {/* cart 오버레이 되는 부분 */}
      <div
        className={
          props.isActive
            ? "cart-bg-overlay"
            : "cart-bg-overlay cart-bg-overlay-on"
        }
      ></div>

      <div
        className={
          props.isActive
            ? "right-side-cart-area"
            : "right-side-cart-area cart-on"
        }
        style={{ zIndex: "21474899" }}
      >
        {/* Cart Button  */}
        <div className="cart-button">
          <Link to="#" id="rightSideCart">
            <img src="/assets/images/core-img/bag2.svg" alt="" /> <span>5</span>
          </Link>
        </div>

        {/* user button */}
        <div className="user-button">
          <Link to="#" id="rightSideCart">
            <img src="/assets/images/core-img/user2.svg" alt="" />
          </Link>
        </div>

        {/* close */}
        <div className="close-button">
          <Link to="#" id="rightSideCart" onClick={props.handleToggle}>
            <i className="fa fa-close fa-close-cart" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="cart-content">
          {/* Cart Summary */}
          <div className="cart-amount-summary">
            <h2>쇼핑 내역</h2>
            <ul className="summary-table">
              <li>
                <span>티켓 가격:</span> <span>50,000뤙</span>
              </li>
              <li>
                <span>티켓 총수량:</span> <span>5장</span>
              </li>
              <li>
                <span>총할인:</span> <span>-13%</span>
              </li>
              <li>
                <span>결제금액:</span> <span>43,500원</span>
              </li>
            </ul>
          </div>

          {/* Cart List Area */}
          <div className="cart-list">
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <Link to="#" className="product-image">
                <img
                  src="http://tong.visitkorea.or.kr/cms/resource/52/2607852_image2_1.jpg"
                  className="cart-thumb"
                  alt=""
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">경기도 안성</span>
                  <h6>안성 남사당놀이 상설공연</h6>
                  <p className="size">수량: 3</p>
                  <p className="color">할인: 15%</p>
                  <p className="price">10,000</p>
                </div>
              </Link>
            </div>

            <div className="single-cart-item">
              <Link to="#" className="product-image">
                <img
                  src="http://tong.visitkorea.or.kr/cms/resource/24/2804924_image2_1.jpg"
                  className="cart-thumb"
                  alt=""
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">강원도 강원</span>
                  <h6>강원세계산림엑스포</h6>
                  <p className="size">수량: 2</p>
                  <p className="color">할인: 10%</p>
                  <p className="price">18,000원</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="checkout-btn mt-100">
            <Link
              to="/"
              className="btn essence-btn"
              style={{ backgroundColor: "#22b3c1", marginLeft: "10%" }}
            >
              결제하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
