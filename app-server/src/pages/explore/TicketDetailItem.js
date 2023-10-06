import { Link, useParams } from "react-router-dom";
import { push, pop } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import styles from "./ticketDetailItem.module.css";

const TicketDetailItem = function (props) {
  const [isActive, setActive] = useState("false");
  // const [reviewData, setReviewData] = useState([]);
  const alertHandler = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {/* 알람창 놓고싶은데 넣기*/}
      <div
        className={
          isActive ? "toast toast-3s fade hide" : "toast toast-3s fade show"
        }
        role="alert"
        aria-live="assertive"
        data-delay="3000"
        aria-atomic="true"
        style={{ position: "absolute", right: "30%", zIndex: 200 }}
      >
        <div className="toast-header" style={{ backgroundColor: "#22b3c1" }}>
          <img
            src="assets/images/logo2.png"
            alt=""
            className="img-fluid m-r-5"
            style={{ width: "150px" }}
          />
          <strong className="mr-auto"></strong>
          <small className="text-muted"></small>
        </div>
        <div className="toast-body">
          <strong className="mr-auto">티켓이 장바구니에 담겼습니다.</strong>
        </div>
      </div>

      {/* close */}
      <div id={styles.closeButton}>
        <div className="close-button"
            id="rightSideClose"
            onClick={props.openModal}
          >
            <i className="fa fa-close fa-close-cart" aria-hidden="true"></i>
        </div>
      </div>

      <div onClick={(e) => e.stopPropagation()} className={styles.modalContainer}>
        {/* 모달 왼쪽 영역 */}
        <div className={styles.modalLeft}>
          <img
            className={styles.modalImage}
            src={props.festival.first_image}
            alt=""
          />
        </div>

        {/* 모달 오른쪽 영역 */}
        <div className={styles.modalRight}>
          <h4>{props.festival.title}</h4>
          <div className={styles.address}>
            {props.festival.addr1}
          </div>
          <br></br>
          <h6 className="list">
            {"운영기간: "}
            {props.festival.event_start_date} ~ {props.festival.event_end_date}
          </h6>
          {props.festival.use_time_festival}
          <div className={styles.overview}>
            {"상세 정보"}
            <p>{props.festival.over_view}</p>
          </div>
        </div>
      </div>

      <div className= {styles.buttonContainer}>
        {/* 홈페이지 연결 */}
        <div
        className={styles.button}
        onClick={() => {
        window.open(props.festival.home_page, '_blank');
        }}>
          <a>홈페이지</a>
        </div>
        {/* 장바구니 담기 */}
        <div onClick={alertHandler}>
          <div className={styles.button} onClick={props.toCart}>
            <a>장바구니</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailItem;
