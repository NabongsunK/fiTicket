import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";

// const initialData = [
//   {
//     id: 1,
//     badge: "경기도 안성시",
//     name: "안성 남사당놀이 상설공연",
//     quantity: 2,
//     // discount: 0,  나중에 결정  (할인)
//     price: 10000,
//     image: "http://tong.visitkorea.or.kr/cms/resource/52/2607852_image2_1.jpg",
//   },
//   {
//     id: 2,
//     badge: "세종 특별시",
//     name: "국립세종수목원 야간개장 ＂특별한 夜행＂",
//     quantity: 3,
//     // discount: 10,   나중에 결정  (할인)
//     price: 2500,
//     image: "http://tong.visitkorea.or.kr/cms/resource/84/2993884_image2_1.jpg",
//   },
// ];
const Cart = function (props) {
  // 카트 분리시키기
  // 삭제하면 리덕스이용해서 리스트에서 지우기
  const initialData = useSelector((state) => state.myCartSlice.myCarts);
  const [cartItems, setCartItems] = useState(initialData);

  useEffect(() => {
    props.setCartNo(cartItems.length);
  }, [cartItems]);

  useEffect(() => {
    setCartItems(initialData);
  }, [initialData]);

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

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleIncreaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
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
        {/* Cart Button */}
        <div className="cart-button">
          <Link to="#" id="rightSideCart">
            <img src="/assets/images/core-img/bag2.svg" alt="" />
            <span>{props.cartNo}</span>
          </Link>
        </div>

        {/* user button */}
        <div className="user-button">
          <Link to="#" id="rightSideCart">
            <img src="/assets/images/core-img/user2.svg" alt="" />
          </Link>
        </div>

        {/* close */}
        <div className="close-button">
          <Link to="#" id="rightSideCart" onClick={props.handleToggle}>
            <i className="fa fa-close fa-close-cart" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="cart-content">
          {/* Cart Summary */}
          <CartSummary
            calculateTotalAmount={calculateTotalAmount}
            calculateTotalQuantity={calculateTotalQuantity}
            calculateTotalDiscount={calculateTotalDiscount}
          />

          {/* Cart List Area */}
          <CartList
            cartItems={cartItems}
            handleRemoveItem={handleRemoveItem}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
          />

          <div className="checkout-btn mt-100">
            <Link
              to="/"
              className="btn essence-btn"
              style={{ backgroundColor: "#22b3c1", marginLeft: "10%" }}
            >
              결제하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
