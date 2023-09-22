import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pop, change } from "../../store/cartSlice";

const UserListItem = function (props) {
  return (
    <div className="single-cart-item">
      <Link
        to={`/explore/${props.item.id}/review`}
        className="product-image"
        onClick={props.handleToggle}
      >
        <img
          src={props.item.first_image}
          className="cart-thumb"
          alt={props.item.title}
        />
        <div className="cart-item-desc">
          <span className="badge">{props.item.addr1}</span>
          <h6>{props.item.title}</h6>
          <p className="size">수량: {props.item.ticket_quantity}</p>
        </div>
      </Link>
    </div>
  );
};

export default UserListItem;
