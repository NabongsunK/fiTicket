import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import TicketDetailItem from "./TicketDetailItem";

import styles from "./ticketlistitem.module.css";

import { push, pop } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import HomepageBtn from "../../components/common/HomepageBtn";

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
            top: "10%",
            left: "15%",
            fontSize: "32px",
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
    <div className="col-lg-6 col-sm-6 mb-3">
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
              <span className={styles.info}>*D-{props.festival.d_day}</span>
              <h4>{props.festival.title}</h4>
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
            <HomepageBtn homepage_src={props.festival.home_page} />
            <div className="explore_list_button" onClick={toCart}>
              <Link onClick={props.alertHandler}>
                <i className="fa fa-cart-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketListItem;
