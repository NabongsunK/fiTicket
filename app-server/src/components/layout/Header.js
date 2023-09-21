import { Link, NavLink } from "react-router-dom";
import Cart from "../common/Cart";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getUser = async function (user_id) {
  const res = await axios.post("/login/getuser", {
    user_id: user_id,
  });
  return res.data.data;
};

const Header = function () {
  const [isActive, setActive] = useState("false");
  const [cartNo, setCartNo] = useState(0);
  const handleToggle = function () {
    setActive(!isActive);
  };
  const [login_id, setLogin_id] = useState("");

  const [is_signed, user_id] = useSelector((state) => [
    state.myLoginSlice.is_signed,
    state.myLoginSlice.user_id,
  ]);

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
