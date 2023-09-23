import { Link } from "react-router-dom";
import { push, pop } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import Review from "../home/Review";
import { useEffect, useState } from "react";

const TicketDetailItem = function (props) {
  const [isActive, setActive] = useState("false");
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

      <h4>{props.festival.title}</h4>
      {/* 홈페이지 연결 */}
      <div
        className="explore_list_button"
        style={{ float: "left", paddingRight: "10px" }}
      >
        <Link to={props.festival.home_page} target="_blank">
          <i className="fa fa-home"></i>
        </Link>
      </div>
      {/* 장바구니 담기 */}
      <div className="explore_list_button" onClick={props.toCart}>
        <Link onClick={alertHandler}>
          <i className="fa fa-cart-plus"></i>
        </Link>
      </div>

      <form>
        <div className="content">
          <i className="fa fa-clock" style={{ float: "left" }}></i>
          <h6 className="list">
            {"운영기간 "}
            {props.festival.event_start_date} ~ {props.festival.event_end_date}
          </h6>
          {props.festival.addr1}
          <br />
          {props.festival.use_time_festival}
          <img
            className="modal_image1"
            src={props.festival.first_image}
            alt=""
          />
          <br />
          <br />
          {"상세 정보"}
          <p>{props.festival.over_view}</p>
        </div>
      </form>
      <button onClick={props.openModal}>close</button>
    </div>
  );
};

export default TicketDetailItem;
