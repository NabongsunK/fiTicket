import { useSelector } from "react-redux";
import Left from "./Left";
import axios from "axios";
import { useEffect, useState } from "react";
import CartList from "./CartList";
import UserList from "./UserList";

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
  const [userItems, setCartItems] = useState([]);
  useEffect(() => {
    getList(user_id).then((response) => {
      setCartItems(response);
    });
  }, [user_id]);

  return (
    <div
      className={
        props.states.isActive && !props.states.isCart
          ? "right-side-cart-area cart-on"
          : "right-side-cart-area "
      }
      style={{ zIndex: "21474899" }}
    >
      <Left cartNo={props.cartNo} actions={props.actions} />

      <div className="cart-content">
        <UserList userItems={userItems} />
      </div>
    </div>
  );
};

export default User;
