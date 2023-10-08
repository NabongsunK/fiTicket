import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { pop, change } from "../../store/cartSlice";

import styles from "./cartlistitem.module.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";
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
  const [imgsrc, setImgsrc] = useState(); // 로딩 상태 추가
  const navigate = useNavigate();

  // 쿼리로 경위도 찾기
  const getQR = async function (query) {
    if (imgsrc) {
      setImgsrc();
    } else {
      try {
        const res = await axios.post("/auth/getqr", {
          // query: "http://localhost:3000/" + query,
          query: query,
        });

        setImgsrc(res.data.url);
        return res;
      } catch (error) {
        alert("잠시후 다시 시도해주세요.");
      }
    }
  };

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
          backgroundImage: `url(${
            imgsrc ? imgsrc : "/assets/images/fes_default.jpg"
          })`,
          // width: "",
          height: "200px",
          backgroundSize: "cover",
        }}
      ></div>
    ) : (
      <div
        className={styles.mycartitem}
        style={{
          backgroundImage: `url("${imgsrc ? imgsrc : img}")`,
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
      <div
        onClick={() => {
          navigate(`/explore/${props.item.id}/review`);
        }}
        className="product-image"
      >
        <div className="row">
          <div className="col-lg-4 p-0">{poster}</div>

          <div className="col-lg-8">
            <div className="cart-item-desc">
              <div onClick={props.handleToggle}>
                <span className="badge">{props.item.addr1}</span>
                <h6>{props.item.title}</h6>
                <p className="size">수량: {props.item.ticket_quantity}</p>
                <h4 className="badge">{stars(review ? review.rating : -1)}</h4>
                <span className="color">{reviewText}</span>
              </div>
              <Button
                onClick={async () => {
                  await getQR(props.item.first_image);
                }}
                title={"QR코드 받기"}
                style={{ marginTop: 0, border: "1px solid white" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
