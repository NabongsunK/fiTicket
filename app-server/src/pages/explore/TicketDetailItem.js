import { Link } from "react-router-dom";
import { push, pop } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import Review from "../home/Review";
import { useEffect } from "react";

const TicketDetailItem = function (props) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
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
        <Link>
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
          {"베스트 리뷰"}
        </div>
      </form>
      <button onClick={props.openModal}>close</button>
    </div>
  );
};

export default TicketDetailItem;
