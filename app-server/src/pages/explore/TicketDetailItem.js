import React from "react";

const TicketDetailItem = function (props) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2>{props.festival.title}</h2>
      <form>
        <div className="content">
          <i className="fa fa-clock"></i>
          <h3 className="list">
            {props.festival.eventstartdate} ~ {props.festival.eventenddate}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vestibulum euismod dolor vel bibendum. Integer a tristique augue.
            Vivamus bibendum odio at quam convallis, eu fringilla tellus
            viverra. Sed id malesuada sapien. Sed vitae odio a ante venenatis
            fermentum vel quis justo. Fusce non lacinia lectus. Nullam tincidunt
            quam eget justo convallis, eget gravida turpis auctor. Donec sed
            urna non dui vulputate tempor nec ut ligula. Aenean et elit vel
          </p>
        </div>
        <br />
        <br />
      </form>
      <button onClick={props.openModal}>close</button>
    </div>
  );
};

export default TicketDetailItem;
