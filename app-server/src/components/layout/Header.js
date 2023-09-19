import { Link, NavLink } from "react-router-dom";
import Cart from "../common/Cart";
import { useState } from "react";

const Header = function () {
  const [isActive, setActive] = useState("false");

  const [cartNo, setCartNo] = useState(0);
  const handleToggle = () => {
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
                  <img src="assets/images/logo2.png" alt="" />
                </Link>
                <ul className="nav">
                  <li>
                    <NavLink to="/ ">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/deals">추천 행사</NavLink>
                  </li>
                  <li>
                    <NavLink to="/explore">행사 찾기</NavLink>
                  </li>
                  <li>
                    <NavLink to="/teams">Loca!T</NavLink>
                  </li>
                </ul>
                <Link className="menu-trigger">
                  <span>Menu</span>
                </Link>
              </nav>
            </div>
          </div>

          <div className="header-meta d-flex clearfix">
            <div className="user-login-info">
              <NavLink to="/login">
                <img src="/assets/images/core-img/user.svg" alt="" />
              </NavLink>
            </div>

            <div className="cart-area">
              <Link to="#" id="essenceCartBtn" onClick={handleToggle}>
                <img src="/assets/images/core-img/bag.svg" alt="" />{" "}
                <span>{cartNo}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Cart
        isActive={isActive}
        handleToggle={handleToggle}
        cartNo={cartNo}
        setCartNo={setCartNo}
      />
    </>
  );
};

export default Header;
