import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Left from "./Left";
import { setAmount } from "../../store/cartSlice";
import FavoriteList from "./FavoriteList";

import axios from "axios";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getList = async function (user_id) {
  const url = "/favorite/favorlist/" + user_id;
  const res = await axios.get(url);
  return res.data;
};

const favorite = function (props) {
  const user_id = useSelector((state) => state.myLoginSlice.user_id);
  const [favorItems, setFavorItems] = useState([]);
  useEffect(() => {
    getList(user_id).then((response) => {
      setFavorItems(response);
    });
  }, [user_id]);

  const cartItems = useSelector((state) => state.myCartSlice.myCarts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAmount({ newAmount: calculateTotalAmount() }));
  }, [cartItems]);
  // console.log(favorItems);
  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div
      className={
        props.states.isActive == true && props.states.isCart === 3
          ? "right-side-cart-area cart-on favorite-on"
          : "right-side-cart-area"
      }
      style={{ zIndex: "21474899" }}
    >
      <Left actions={props.actions} />

      <div className="cart-content">
        {/* Cart List Area */}
        <FavoriteList favorItems={favorItems} />
      </div>
    </div>
  );
};

export default favorite;
