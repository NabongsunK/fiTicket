import { Link } from "react-router-dom";
import Map from "./Map";
import TicketList from "./TicketList";

import festivals from '../../data/festivals.json';

const Explore= function(){
  return (
    <>
      <div className="second-page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Book Prefered Deal Here</h4>
              <h2>Make Your Reservation</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttersi labore et dolore magna aliqua is ipsum suspendisse ultrices gravida</p>
              <div className="main-button"><Link to="/explore">Discover More</Link></div>
            </div>
          </div>
        </div>
      </div>


      {/* 지도 위 소제목 */}
      <div className="amazing-deals">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>지금 바로 축제를 즐기세요!</h2>
                <p>여러분 주위에 여러 행사들이 열려있습니다.<br/>Loca!T와 함께 다양한 축제를 지금 바로 만끽하시길 바랍니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 본문*/}
      <div className="reservation-form">
        <div className="container">
          <div className="row">
            {/* 지도 */}
            <div className="col-lg-12">
              <Map/>
            </div>

            {/* 축제 목록 리스트 */}
            <div className="col-lg-12">
              <TicketList festivals={festivals}/>
              
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Explore;