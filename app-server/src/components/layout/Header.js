import { Link, NavLink } from "react-router-dom";
import Cart from "../common/Cart";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import User from "../common/User";
import Left from "../common/Left";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getUser = async function (user_id) {
  const res = await axios.post("/login/getuser", {
    user_id: user_id,
  });
  return res.data.data;
};

const Header = function (props) {
  const [isActive, setActive] = useState(false);
  const [isCart, setCart] = useState(true);
  const [cartNo, setCartNo] = useState(0);
  const handleToggle = function (next) {
    setActive(!isActive);
    setTimeout(() => {
      if (typeof next === "function") {
        next?.();
      }
    }, 1000);
  };
  const goCart = function (next) {
    setCart(true);
    next?.();
  };
  const goUser = function (next) {
    setCart(false);
    next?.();
  };
  const [login_id, setLogin_id] = useState("");

  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  const user_id = useSelector((state) => state.myLoginSlice.user_id);

  useEffect(() => {
    getUser(user_id).then((response) => {
      setLogin_id(response ? response.name : "");
    });
  }, [is_signed]);

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
            {is_signed ? <div>{login_id}</div> : <div>로그인하세요</div>}
            <div className="user-login-info">
              {is_signed ? (
                <NavLink
                  onClick={() => {
                    goUser(handleToggle);
                  }}
                >
                  <img src="/assets/images/core-img/user.svg" alt="" />
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <img src="/assets/images/core-img/user.svg" alt="" />
                </NavLink>
              )}
            </div>

            <div className="cart-area">
              <Link
                id="essenceCartBtn"
                onClick={() => {
                  goCart(handleToggle);
                }}
              >
                <img src="/assets/images/core-img/bag.svg" alt="" />{" "}
                <span>{cartNo}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/*뒷배경 */}
      <div
        className={
          isActive ? "cart-bg-overlay cart-bg-overlay-on" : "cart-bg-overlay "
        }
      ></div>

      <Cart
        states={{ isActive, isCart, cartNo }}
        actions={{ handleToggle, goCart, goUser, setCartNo }}
      />
      <User
        states={{ isActive, isCart }}
        actions={{ handleToggle, goCart, goUser, setCartNo }}
      />
    </>
  );
};

export default Header;
