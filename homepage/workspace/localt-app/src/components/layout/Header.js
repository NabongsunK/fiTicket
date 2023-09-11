import { Link, NavLink } from "react-router-dom";
import Cart from "../common/Cart";
import { useState } from "react";


const Header= function(){

  const [isActive, setActive]= useState("false");
  
  const handleToggle= () => {
    setActive(!isActive);
  };
  
  return (
    <>
      
      <header className="header-area header-sticky">
        <div className="container breakpoint-off d-flex align-items-center">
          <div className="col-10">
            <div className="">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src="assets/images/logo.png" alt="" />
                </Link>
                <ul className="nav">
                  <li><NavLink to="/ ">Home</NavLink></li>
                  <li><NavLink to="/deals">추천 행사</NavLink></li>
                  <li><NavLink to="/books">행사 찾기</NavLink></li>
                  <li><NavLink to="/about">Loca!T</NavLink></li>
                </ul>
                <Link className='menu-trigger'>
                    <span>Menu</span>
                </Link>
              </nav>
            </div>
          </div>

          <div className="header-meta d-flex clearfix">
            <div className="user-login-info">
              <NavLink to="/login"><img src="/assets/images/core-img/user.svg" alt=""/></NavLink>
            </div>

            <div className="cart-area">
              <Link to="#" id="essenceCartBtn" onClick={handleToggle}><img src="/assets/images/core-img/bag.svg" alt=""/> <span>3</span></Link>
            </div>
          </div>

        </div>
      </header>

      {/* cart 오버레이 되는 부분 */}
      <div className={isActive ? "cart-bg-overlay" : "cart-bg-overlay cart-bg-overlay-on"}></div>

      <div className={isActive ? "right-side-cart-area" : "right-side-cart-area cart-on"}>

        {/* Cart Button  */}
        <div className="cart-button">
            <Link to="#" id="rightSideCart" onClick={handleToggle}><img src="/assets/images/core-img/bag2.svg" alt=""/> <span>3</span></Link>
        </div>

        <div className="cart-content d-flex">

            {/* Cart List Area */}
            <div className="cart-list">
                {/* Single Cart Item */}
                <div className="single-cart-item">
                    <Link to="#" className="product-image">
                        <img src="/assets/images/product-img/product-1.jpg" className="cart-thumb" alt=""/>
                        {/* Cart Item Desc */}
                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
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
                        <img src="/assets/images/product-img/product-2.jpg" className="cart-thumb" alt=""/>
                        {/* Cart Item Desc */}
                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
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
                        <img src="/assets/images/product-img/product-3.jpg" className="cart-thumb" alt=""/>
                        {/* Cart Item Desc */}
                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
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
                    <li><span>subtotal:</span> <span>$274.00</span></li>
                    <li><span>delivery:</span> <span>Free</span></li>
                    <li><span>discount:</span> <span>-15%</span></li>
                    <li><span>total:</span> <span>$232.00</span></li>
                </ul>
                <div className="checkout-btn mt-100">
                    <Link to="checkout.html" className="btn essence-btn">check out</Link>
                </div>
            </div>
        </div>
      </div>

    </>
  );
};

export default Header;