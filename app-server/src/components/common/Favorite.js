import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Left from "./Left";
import { setAmount } from "../../store/cartSlice";
import FavoriteList from "./FavoriteList";

const favorite = function (props) {
  const myFavor = useSelector((state) => state.myFavorSlice.myFavor);
  console.log(myFavor);

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
        <FavoriteList favorItems={myFavor} />
      </div>
    </div>
  );
};

export default favorite;
