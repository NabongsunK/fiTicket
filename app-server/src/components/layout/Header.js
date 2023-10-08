import { Link, NavLink } from "react-router-dom";
import Cart from "../common/Cart";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import User from "../common/User";
import Favorite from "../common/Favorite";
import Left from "../common/Left";
import { useCookies } from "react-cookie";
import { signin, signout } from "../../store/loginSlice";

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
  const [isCart, setCart] = useState();
  const [login_id, setLogin_id] = useState("");
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  const user_id = useSelector((state) => state.myLoginSlice.user_id);
  const cartNo = useSelector((state) => state.myCartSlice.myCarts).length;
  const dispatch = useDispatch();

  const handleToggle = function (e) {
    setActive(!isActive);
    // setTimeout(() => {
    //   if (typeof next === "function") {
    //     next?.();
    //   }
    // }, 1000);
  };
  const goCart = () => {
    setActive(true);
    setCart(Number(1));
    console.log(isActive);
  };
  const goUser = () => {
    setCart(2);
    setActive(true);
    console.log(isActive);
  };
  const goFavorite = () => {
    setCart(3);
    setActive(true);
    console.log(isActive);
  };

  const signOut = function () {
    dispatch(signout());
    removeCookies("is_signed");
    removeCookies("user_id");
    removeCookies("is_manager");
    setCookies("is_signed", false, { path: "/" });
  };

  // 기존 쿠키 저장
  const [cookies, setCookies, removeCookies] = useCookies(["id"]);

  useEffect(() => {
    if (cookies.is_signed && cookies.user_id) {
      dispatch(
        signin({ user_id: cookies.user_id, is_manager: cookies.is_manager })
      );
    }
  }, []);

  useEffect(() => {
    if (is_signed) {
      getUser(user_id).then((response) => {
        setLogin_id(response ? response.name : "");
        if (response && response.name) {
          setCookies("user_id", user_id, { path: "/" });
          setCookies("is_signed", true, { path: "/" });
          setCookies("is_manager", response.role, { path: "/" });
        }
      });
    }
  }, [is_signed]);
  // console.log(isCart);
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container breakpoint-off d-flex align-items-center">
          <div className="col-10">
            <div className="">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src="/assets/images/logo2.jpg" alt="" />
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
                <NavLink onClick={goUser}>
                  <img src="/assets/images/core-img/user.svg" alt="" />
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <img src="/assets/images/core-img/user.svg" alt="" />
                </NavLink>
              )}
            </div>

            <div className="user-favorite-info">
              {is_signed ? (
                <NavLink onClick={goFavorite}>
                  <img src="/assets/images/core-img/heart-fill2.svg" alt="" />
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <img src="/assets/images/core-img/heart2.svg" alt="" />
                </NavLink>
              )}
            </div>

            <div className="cart-area">
              <Link id="essenceCartBtn" onClick={goCart}>
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
        onClick={handleToggle}
      ></div>

      <Cart
        states={{ isActive, isCart }}
        actions={{ handleToggle, goCart, goUser, goFavorite }}
      />
      <User
        states={{ isActive, isCart }}
        actions={{ handleToggle, goCart, goUser, goFavorite, signOut }}
      />
      <Favorite
        states={{ isActive, isCart }}
        actions={{ handleToggle, goCart, goUser, goFavorite }}
      />
    </>
  );
};

export default Header;
