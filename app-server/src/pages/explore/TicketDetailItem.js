import React from "react";

const TicketDetailItem = function (props) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2>{props.festival.title}</h2>
      <form>
        <div className="content">
          <i className="fa fa-clock"></i>
          <h3 className="list">
            {props.festival.event_start_date} ~ {props.festival.event_end_date}
          </h3>
          <p>{props.festival.over_view}</p>
        </div>
        <br />
        <br />
      </form>
      <button onClick={props.openModal}>close</button>
    </div>
  );
};

export default TicketDetailItem;
