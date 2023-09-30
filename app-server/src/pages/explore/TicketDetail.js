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
  const allList = useSelector((state) => state.myPageSlice.allList);
  const festival = allList.filter((fes) => fes.id === Number(id))[0];
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.myCartSlice.myCarts);
  const [reviewData, setReviewData] = useState([]);

  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  // 처음 랜더링되면
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터를 가져온 후에 Redux 상태를 업데이트합니다.
        setReviewData(await getReview(id));
        dispatch(
          setMapItude({ newMapItude: [festival.map_x, festival.map_y, 4] })
        );
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정
      } catch (error) {
        console.error("데이터를 불러오는 동안 오류 발생:", error);
        setLoading(false); // 에러 발생 시에도 로딩 상태를 false로 설정
      }
    };

    fetchData();
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
  const [isActive, setActive] = useState("false");
  const alertHandler = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
  };

  // 로딩 중이면 로딩 메시지를 보여줍니다.
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Outlet />
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
            src="../../../public/assets/images/logo2.png"
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
        <Link onClick={alertHandler}>
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
