import { Link } from "react-router-dom";

const DealsListItem= function(props){
  
  return (
    <>
      <div className="col-lg-6 col-sm-6">
        <div className="item">
          <div className="row">
            <div className="col-lg-6">
              <div className="image">
                <img src={props.festival.firstimage} alt="" />
                {/* <img src="http://tong.visitkorea.or.kr/cms/resource/75/2769775_image2_1.JPG" alt="" /> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content">
                <span className="info">*Limited Offer Today</span>
                <h4>{props.festival.title}</h4>
                <div className="row">
                  <div className="col-6">
                    <i className="fa fa-clock"></i>
                    <span className="list">{props.festival.eventstartdate} -{props.festival.eventenddate}</span>
                  </div>
                  
                </div>
                <p>Lorem ipsum dolor sit amet dire consectetur adipiscing elit.</p>
                <div className="main-button">
                  <Link to="reservation.html">Make a Reservation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsListItem;