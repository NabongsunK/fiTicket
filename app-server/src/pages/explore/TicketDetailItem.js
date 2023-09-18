import React from "react";

const TicketDetailItem = function (props) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h4>{props.festival.title}</h4>
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
          {"리플"}
        </div>
      </form>
      <button onClick={props.openModal}>close</button>
    </div>
  );
};

export default TicketDetailItem;
