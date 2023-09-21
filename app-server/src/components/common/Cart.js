import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";
import Payment from "./Payment";
import CartLeft from "./CartLeft";

const Cart = function (props) {
  const cartItems = useSelector((state) => state.myCartSlice.myCarts);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    props.setCartNo(cartItems.length);
    setAmount(calculateTotalAmount());
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
      {/* cart 오버레이 되는 부분 */}
      <div
        className={
          props.isActive
            ? "cart-bg-overlay"
            : "cart-bg-overlay cart-bg-overlay-on"
        }
      ></div>

      <div
        className={
          props.isActive
            ? "right-side-cart-area"
            : "right-side-cart-area cart-on"
        }
        style={{ zIndex: "21474899" }}
      >
        <CartLeft cartNo={props.cartNo} handleToggle={props.handleToggle} />

        <div className="cart-content">
          {/* Cart Summary */}
          <CartSummary
            calculateTotalAmount={calculateTotalAmount}
            calculateTotalQuantity={calculateTotalQuantity}
            calculateTotalDiscount={calculateTotalDiscount}
          />

          {/* Cart List Area */}
          <CartList cartItems={cartItems} />

          <Payment amount={amount} handleToggle={props.handleToggle} />
        </div>
      </div>
    </>
  );
};

export default Cart;
