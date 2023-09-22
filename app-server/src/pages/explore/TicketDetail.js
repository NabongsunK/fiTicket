import { useOutletContext, useParams } from "react-router";

const TicketDetailItem = function () {
  const { id } = useParams();
  const { allListData } = useOutletContext();
  const festival = allListData.filter((fes) => fes.id === Number(id))[0];
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h4>{festival.title}</h4>
      <form>
        <div className="content">
          <i className="fa fa-clock" style={{ float: "left" }}></i>
          <h6 className="list">
            {"운영기간 "}
            {festival.event_start_date} ~ {festival.event_end_date}
          </h6>
          {festival.addr1}
          <br />
          {festival.use_time_festival}
          <img className="modal_image1" src={festival.first_image} alt="" />
          <br />
          <br />
          {"상세 정보"}
          <p>{festival.over_view}</p>
          {"리플"}
        </div>
      </form>
    </div>
  );
};

export default TicketDetailItem;
