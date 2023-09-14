import { Link } from "react-router-dom";

const TicketListItem= function(props){
  return (
    <div className="col-lg-12 col-sm-3">
      <div className="item">
        <div className="row">
          <div className="col-lg-2">
            <div className="image">
              <img src={props.festival.firstimage} alt="" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="content">
              <span className="info">*궁중 다도 체험</span>
              <h4>{props.festival.title}</h4>
              <div className="row">
                <div className="col-6">
                  <i className="fa fa-clock"></i>
                  <span className="list">{props.festival.eventstartdate} ~ {props.festival.eventenddate}</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-map"></i>
                  <span className="list">다과세트 할인</span>
                </div>
              </div>
              <p>경복궁 생과방에서 진행시 필요한 다과 세트 할인</p>

            </div>
          </div>
          <div className="col-lg-2 align-self-center">
            <div className="main-button">
              <Link to="https://www.chf.or.kr/short/8sQs" target="_blank">행사 홈페이지</Link>
            </div>
          </div>
          <div className="col-lg-2 align-self-center">
            <div className="main-button">
              <Link to="reservation.html">티켓 구매</Link>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default TicketListItem;