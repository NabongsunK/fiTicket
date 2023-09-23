import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useOutletContext, useParams } from "react-router";
import { Link } from "react-router-dom";
import { push } from "../../store/cartSlice";
import { setMapItude } from "../../store/mapSlice";
import axios from "axios";
import ReviewList from "./ReviewList";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getReview = async function (ticket_id) {
  try {
    const res = await axios.get(`/review/reviews/${ticket_id}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const TicketDetailItem = function () {
  const { id } = useParams();
  const { allListData } = useOutletContext();
  const festival = allListData.filter((fes) => fes.id === Number(id))[0];
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.myCartSlice.myCarts);
  const [reviewData, setReviewData] = useState([]);

  // TODO: MAPDIV의 getcurrent보다 늦게 실행되야됨 settimeout 안쓰고 이거떄문에 맵이 두개생김
  useEffect(() => {
    getReview(id).then((response) => setReviewData(response));
    setTimeout(() => {
      dispatch(
        setMapItude({ newMapItude: [festival.map_x, festival.map_y, 4] })
      );
    }, 50);
  }, []);
  const toCart = function () {
    dispatch(
      push({
        ticket: {
          // 여기 지역추가
          badge: festival.addr1 + " " + festival.addr2,
          name: festival.title,
          quantity: 1,
          // 여기 가격추가
          price: festival.id,
          image: festival.first_image2,
          ticket_id: festival.id,
          index: myCart.length,
        },
      })
    );
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Outlet />
      <h4>{festival.title}</h4>
      {/* 홈페이지 연결 */}
      <div
        className="explore_list_button"
        style={{ float: "left", paddingRight: "10px" }}
      >
        <Link to={festival.home_page} target="_blank">
          <i className="fa fa-home"></i>
        </Link>
      </div>
      {/* 장바구니 담기 */}
      <div className="explore_list_button" onClick={toCart}>
        <Link>
          <i className="fa fa-cart-plus"></i>
        </Link>
      </div>
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
          {"리뷰"}
          <ReviewList reviewData={reviewData} />
        </div>
      </form>
    </div>
  );
};

export default TicketDetailItem;
