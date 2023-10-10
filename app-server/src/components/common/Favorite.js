import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Left from "./Left";
import { setAmount } from "../../store/cartSlice";
import FavoriteList from "./FavoriteList";
import PopUp from "./PopUp";

const favorite = function (props) {
  const myFavor = useSelector((state) => state.myFavorSlice.myFavor);
  const [isActive, setIsActive] = useState(false);
  const [popText, setPopText] = useState("");

  const alertHandler = function (title) {
    setPopText(title);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 5000);
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
      <PopUp body={popText} isActive={isActive} />
      <div className="cart-content">
        {/* Cart List Area */}
        <FavoriteList favorItems={myFavor} alertHandler={alertHandler} />
      </div>
    </div>
  );
};

export default favorite;
