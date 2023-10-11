import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import TicketDetailItem from "./TicketDetailItem";

import styles from "./ticketlistitem.module.css";

import { push, pop } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { popFavor, pushFavor } from "../../store/favorSlice";
import Button from "../../components/common/Button";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "70vh",
    width: "50vw",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "50px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 3)",
    backdropFilter: "sepia(90%)",
  },
};

const TicketListItem = function (props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const appElement = document.getElementById("root");
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.myCartSlice.myCarts);
  const myFavor = useSelector((state) => state.myFavorSlice.myFavor);
  const user_id = useSelector((state) => state.myLoginSlice.user_id);
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);

  if (appElement) {
    Modal.setAppElement(appElement);
  } else {
    console.error("App element not found!");
  }

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  const toCart = function () {
    dispatch(
      push({
        ticket: {
          badge: props.festival.addr1 + " " + props.festival.addr2,
          name: props.festival.title,
          quantity: 1,
          price: props.festival.price,
          image: props.festival.first_image,
          ticket_id: props.festival.id,
          index: myCart.length,
        },
      })
    );
  };

  const toFavor = function () {
    if (!props.isFavor) {
      dispatch(
        pushFavor({
          ticket: {
            ticket_id: props.festival.id,
            title: props.festival.title,
            first_image: props.festival.first_image,
            price: props.festival.price,
            d_day: props.festival.d_day,
          },
          user_id: user_id,
        })
      );
    } else {
      dispatch(
        popFavor({
          ticket: {
            ticket_id: props.festival.id,
          },
          user_id: user_id,
        })
      );
    }
  };

  const img = props.festival.first_image;
  const thumbsUp =
    props.festival.rec == 0 ? (
      ""
    ) : (
      <span>
        <i
          className="fa fa-thumbs-up"
          style={{
            color: "#22b3c1",
            position: "absolute",
            top: "6%",
            left: "12%",
            fontSize: "32px",
            border: "1px solid #22b3c1",
            borderRadius: "23px",
            backgroundColor: "#f7f7f7",
            padding: "4px 6px",
            boxShadow: "rgba(0, 0, 0, 0.15) 2px 2px 1px 1px",
          }}
        ></i>
      </span>
    );
  const poster =
    props.festival.first_image2 === "" ? (
      <Link to={`/explore/${props.festival.id}`}>
        <div
          className={styles.image}
          style={{
            backgroundImage: "url('/assets/images/fes_default.jpg')",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
        ></div>
      </Link>
    ) : (
      <Link to={`/explore/${props.festival.id}`}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url("${img}")`,
            width: "100%",
            height: "100%",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Link>
    );
  return (
    <div className="col-lg-6 col-sm-12 mb-3">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={openModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TicketDetailItem
          festival={props.festival}
          openModal={openModal}
          toCart={toCart}
          toFavor={toFavor}
        />
      </Modal>
      <div className={styles.item}>
        <div className="row">
          <div className="col-lg-4">
            {thumbsUp}
            {poster}
          </div>
          <div
            className="col-lg-6 align-self-center"
            onClick={openModal}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.content}>
              <span className={styles.info}>
                *D-{props.festival.d_day}
                {/* <figure>
                  <img src="/assets/images/core-img/heart.svg" />
                </figure> */}
              </span>
              <h4>
                {props.festival.title.substring(0, 23)}
                {props.festival.title.length > 23 ? "..." : ""}
              </h4>
              <div className="row">
                <div className="col-12">
                  <div className={styles.list}>
                    <i className="fa fa-clock"></i>
                    {props.festival.event_start_date} ~{" "}
                    {props.festival.event_end_date}
                  </div>
                </div>
              </div>
              <p>
                {props.festival.over_view.substring(0, 38)}
                {props.festival.over_view.length > 38 ? " . . ." : ""}
              </p>
            </div>
          </div>
          <div className="col-lg-2 align-self-center">
            {/* 홈페이지 연결 */}
            <Button
              title={<i className="fa fa-home"></i>}
              href={props.festival.home_page}
              homepage={true}
            />

            <Button
              title={<i className="fa fa-cart-plus"></i>}
              onClick={() => {
                toCart();
                props.alertHandler("장바구니에 담겼습니다.");
              }}
            />

            {props.isFavor ? (
              <Button
                title={<i className="fa fa-heart" id="myheart"></i>}
                isRev={true}
                style={{
                  border: "1px solid white",
                  boxShadow: "0 0 3px rgba(0, 0, 0, 0.15)",
                }}
                onClick={() => {
                  if (!is_signed) {
                    props.alertHandler("로그인후 이용가능합니다.");
                    return;
                  }
                  toFavor();
                  props.alertHandler("관심리스트에서 제거하였습니다.");
                }}
              />
            ) : (
              <Button
                title={<i className="fa fa-heart" id="myheart"></i>}
                onClick={() => {
                  if (!is_signed) {
                    props.alertHandler("로그인후 이용가능합니다.");
                    return;
                  }
                  toFavor();
                  props.alertHandler("관심리스트에 추가했습니다.");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketListItem;
