import { Link, useParams } from "react-router-dom";
import { push, pop } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import styles from "./ticketDetailItem.module.css";
import Button from "../../components/common/Button";
import PopUp from "../../components/common/PopUp";

const TicketDetailItem = function (props) {
  const [isActive, setIsActive] = useState(false);
  const [popText, setPopText] = useState("");
  const myFavor = useSelector((state) => state.myFavorSlice.myFavor);
  const user_id = useSelector((state) => state.myLoginSlice.user_id);
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);

  const isFavor = myFavor.find((element) => {
    if (element.ticket_id == props.festival.id) {
      return true;
    }
  });

  const alertHandler = function (title) {
    setPopText(title);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <PopUp body={popText} isActive={isActive} />

      {/* close */}
      <div id={styles.closeButton}>
        <div
          className="close-button"
          id="rightSideClose"
          onClick={props.openModal}
        >
          <i className="fa fa-close fa-close-cart" aria-hidden="true"></i>
        </div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContainer}
      >
        <div className={styles.modalContent}>
          <h4 className={styles.modalTitle}>{props.festival.title}</h4>
          <div className={styles.address}>{props.festival.addr1}</div>
          <h6 className={styles.listdate}>
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

      <div id={styles.buttonContainer}>
        {/* 홈페이지 연결 */}
        <Button
          title="홈페이지"
          onClick={() => {
            window.open(props.festival.home_page, "_blank");
          }}
          style={{ padding: "5px 40px" }}
        />

        {/* 장바구니 담기 */}
        <Button
          title="장바구니"
          onClick={() => {
            props.toCart();
            alertHandler("장바구니에 담겼습니다.");
          }}
          style={{ padding: "5px 40px" }}
          divStyle={{ float: "left" }}
        />

        {isFavor ? (
          <Button
            title={<i className="fa fa-heart" id="myheart"></i>}
            isRev={true}
            style={{
              border: "1px solid white",
              boxShadow: "0 0 3px rgba(0, 0, 0, 0.15)",
              padding: "5px 30px",
              float: "left",
            }}
            onClick={() => {
              if (!is_signed) {
                alertHandler("로그인후 이용가능합니다.");
                return;
              }
              props.toFavor();
              alertHandler("관심리스트에서 제거하였습니다.");
            }}
          />
        ) : (
          <Button
            title={<i className="fa fa-heart" id="myheart"></i>}
            onClick={() => {
              if (!is_signed) {
                alertHandler("로그인후 이용가능합니다.");
                return;
              }
              props.toFavor();
              alertHandler("관심리스트에 추가했습니다.");
            }}
            style={{
              padding: "5px 30px",
              float: "left",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TicketDetailItem;
