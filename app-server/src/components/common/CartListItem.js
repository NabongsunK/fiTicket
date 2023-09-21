import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pop, change } from "../../store/cartSlice";

const CartListItem = function (props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.myCartSlice.myCarts);

  const removeItem = function (id) {
    cartItems.forEach((item, i) => {
      if (item.index === id) {
        dispatch(pop({ index: i }));
        return false;
      }
    });
  };

  const increaseQuantity = function (id) {
    console.log(cartItems);
    cartItems.forEach((item, i) => {
      if (item.index === id) {
        const updateItem = { ...item, quantity: item.quantity + 1 };
        dispatch(change({ index: i, updateItem }));
        return false;
      }
    });
  };

  const decreaseQuantity = function (id) {
    cartItems.forEach((item, i) => {
      if (item.index === id) {
        if (item.quantity === 1) {
          dispatch(pop({ index: i }));
        } else {
          const updateItem = { ...item, quantity: item.quantity - 1 };
          dispatch(change({ index: i, updateItem }));
        }
        return false;
      }
    });
  };
  return (
    <div className="single-cart-item">
      <Link to="#" className="product-image">
        <img
          src={props.item.image}
          className="cart-thumb"
          alt={props.item.name}
        />
        <div className="cart-item-desc">
          <span className="product-remove">
            <i
              className="fa fa-close"
              aria-hidden="true"
              onClick={() => removeItem(props.item.index)}
            ></i>
          </span>
          <span className="badge">{props.item.badge}</span>
          <h6>{props.item.name}</h6>
          <p className="size">
            수량:{" "}
            <button onClick={() => decreaseQuantity(props.item.index)}>
              -
            </button>
            {props.item.quantity}
            <button onClick={() => increaseQuantity(props.item.index)}>
              +
            </button>
          </p>
          <p className="color">할인: {props.item.discount}%</p>
          <p className="price">{props.item.price.toLocaleString()}원</p>
        </div>
      </Link>
    </div>
  );
};

export default CartListItem;
