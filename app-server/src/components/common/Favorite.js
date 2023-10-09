import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Left from "./Left";
import { setAmount } from "../../store/cartSlice";
import FavoriteList from "./FavoriteList";

const favorite = function (props) {
  const cartItems = useSelector((state) => state.myCartSlice.myCarts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAmount({ newAmount: calculateTotalAmount() }));
  }, [cartItems]);

  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const calculateTotalDiscount = () => {
    return cartItems.reduce((acc, item) => {
      const discount = isNaN(item.discount) ? 0 : item.discount;
      return acc + ((item.price * discount) / 100) * item.quantity;
    }, 0);
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
        <FavoriteList cartItems={cartItems} />
      </div>
    </div>
  );
};

export default favorite;
