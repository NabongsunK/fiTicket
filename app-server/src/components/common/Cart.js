import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { useDispatch, useSelector } from "react-redux";
import Payment from "./Payment";
import Left from "./Left";
import { setAmount } from "../../store/cartSlice";

const Cart = function (props) {
  const cartItems = useSelector((state) => state.myCartSlice.myCarts);
  const dispatch = useDispatch();
  useEffect(() => {
    props.actions.setCartNo(cartItems.length);
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
    <>
      <div
        className={
          props.states.isActive && props.states.isCart
            ? "right-side-cart-area cart-on"
            : "right-side-cart-area"
        }
        style={{ zIndex: "21474899" }}
      >
        <Left cartNo={props.cartNo} actions={props.actions} />

        <div className="cart-content">
          {/* Cart Summary */}
          <CartSummary
            calculateTotalAmount={calculateTotalAmount}
            calculateTotalQuantity={calculateTotalQuantity}
            calculateTotalDiscount={calculateTotalDiscount}
          />

          {/* Cart List Area */}
          <CartList cartItems={cartItems} />

          <Payment handleToggle={props.actions.handleToggle} />
        </div>
      </div>
    </>
  );
};

export default Cart;
