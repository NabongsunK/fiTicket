import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pop, change } from "../../store/cartSlice";

import styles from "./cartlistitem.module.css";

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

  const img = props.item.first_image;

  const poster =
    props.item.first_image === "" ? (
      <div
        className={styles.mycartitem}
        style={{
          backgroundImage: "url('/assets/images/fes_default.jpg')",
          // width: "",
          height: "200px",
          backgroundSize: "cover",
        }}
      ></div>
    ) : (
      <div
        className={styles.mycartitem}
        style={{
          backgroundImage: `url("${img}")`,
          width: "100%",
          height: "200px",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    );

  const reviewText = review
    ? review.content.substring(0, 65) +
      (review.content.length > 65 ? "..." : "")
    : "";

  return (
    <div className="single-cart-item">
      <Link
        to={`/explore/${props.item.id}/review`}
        className="product-image"
        onClick={props.handleToggle}
      >
        <div className="row">
          <div className="col-lg-4 p-0">{poster}</div>
          <div className="col-lg-8">
            <div className="cart-item-desc">
              <span className="badge">{props.item.addr1}</span>
              <h6>{props.item.title}</h6>
              <p className="size">수량: {props.item.ticket_quantity}</p>
              <h4 className="badge">{stars(review ? review.rating : -1)}</h4>
              <span className="color">{reviewText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserListItem;
