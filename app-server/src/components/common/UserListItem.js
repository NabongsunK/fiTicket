import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pop, change } from "../../store/cartSlice";

import axios from "axios";
import { useEffect, useState } from "react";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const userReview = async function (user_id, ticket_id) {
  const url = "/review/reviews/" + user_id + "/" + ticket_id;
  const res = await axios.get(url);
  return res.data;
};

const UserListItem = function (props) {
  const user_id = useSelector((state) => state.myLoginSlice.user_id);
  const [review, setReview] = useState();
  useEffect(() => {
    userReview(user_id, Number(props.item.id)).then((response) => {
      setReview(response);
    });
  }, [user_id]);

  const stars = (e) => (e == -1 ? "" : "★".repeat(e));
  // const { rating } = review.rating;
  // const content = review.content;
  // console.log(review);

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
          <h4>{stars(review ? review.rating : -1)}</h4>
          <span>{review ? review.content : ""}</span>
        </div>
      </Link>
    </div>
  );
};

export default UserListItem;
