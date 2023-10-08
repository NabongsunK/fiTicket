import { useSelector } from "react-redux";
import Left from "./Left";
import axios from "axios";
import { useEffect, useState } from "react";
import CartList from "./CartList";
import UserList from "./UserList";
import { Link } from "react-router-dom";
import Button from "./Button";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getList = async function (user_id) {
  const url = "/cart/tickethistory/" + user_id;
  const res = await axios.get(url);
  return res.data.data;
};

const cartItems = [
  {
    // 여기 지역추가
    badge: "주소",
    name: "이름",
    quantity: "수량",
    price: "가격",
    image: "이미지",
    ticket_id: "필요한가?",
    index: "필요한가?",
  },
];

const User = function (props) {
  const user_id = useSelector((state) => state.myLoginSlice.user_id);
  const [userItems, setUserItems] = useState([]);
  const myCart = useSelector((state) => state.myCartSlice.myCarts);
  const is_manager = useSelector((state) => state.myLoginSlice.is_manager);
  useEffect(() => {
    getList(user_id).then((response) => {
      setUserItems(response);
    });
  }, [user_id, myCart]);

  return (
    <div
      className={
        props.states.isActive && props.states.opened == 1
          ? "right-side-cart-area cart-on user-on"
          : "right-side-cart-area "
      }
      style={{ zIndex: "21474899" }}
    >
      <Left actions={props.actions} />

      <div className="cart-content">
        <div className="row">
          <div className="col-lg-8 p-0"></div>
          <div className="col-lg-4">
            {is_manager ? (
              <Button
                title="관리자페이지"
                href="/staff"
                onClick={props.actions.handleToggle}
              />
            ) : (
              ""
            )}
            <Button
              title="로그아웃"
              onClick={() => {
                props.actions.signOut();
                props.actions.handleToggle();
              }}
            />
          </div>
        </div>
        <UserList
          userItems={userItems}
          handleToggle={props.actions.handleToggle}
        />
      </div>
    </div>
  );
};

export default User;
