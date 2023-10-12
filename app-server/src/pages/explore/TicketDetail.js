import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useOutletContext, useParams } from "react-router";
import { Link } from "react-router-dom";
import { push } from "../../store/cartSlice";
import { setMapItude } from "../../store/mapSlice";
import axios from "axios";
import ReviewList from "./ReviewList";
import Button from "../../components/common/Button";
import PopUp from "../../components/common/PopUp";
import { popFavor, pushFavor } from "../../store/favorSlice";
import TicketList from "./TicketList";
import NotFound from "../notFound";

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

  if (isNaN(id)) {
    return <NotFound />;
  }

  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  const allList = useSelector((state) => state.myPageSlice.allList);
  const festival = allList.filter((fes) => fes.id === Number(id))[0];

  if (!festival) {
    return <NotFound />;
  }
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.myCartSlice.myCarts);
  const [reviewData, setReviewData] = useState([]);
  const myFavor = useSelector((state) => state.myFavorSlice.myFavor);
  const user_id = useSelector((state) => state.myLoginSlice.user_id);

  const isFavor = myFavor.find((element) => {
    if (element.ticket_id == festival.id) {
      return true;
    }
  });

  const [isActive, setIsActive] = useState(false);
  const [popText, setPopText] = useState("");

  const alertHandler = function (title) {
    setPopText(title);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

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
          price: festival.price,
          image: festival.first_image,
          ticket_id: festival.id,
          index: myCart.length,
        },
      })
    );
  };

  const toFavor = function () {
    if (!isFavor) {
      dispatch(
        pushFavor({
          ticket: {
            ticket_id: festival.id,
            title: festival.title,
            first_image: festival.first_image,
            price: festival.price,
            d_day: festival.d_day,
          },
          user_id: user_id,
        })
      );
    } else {
      dispatch(
        popFavor({
          ticket: {
            ticket_id: festival.id,
          },
          user_id: user_id,
        })
      );
    }
  };

  const img = festival.first_image;
  const poster =
    festival.first_image === "" ? (
      <img
        className="modal_image1"
        src="/assets/images/fes_default.jpg"
        alt=""
        style={{
          maxWidth: "85%",
          maxHeight: "85%",
          width: "auto",
          height: "auto",
        }}
      />
    ) : (
      <img
        className="modal_image1"
        src={festival.first_image}
        alt=""
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
        }}
      />
    );

  // 로딩 중이면 로딩 메시지를 보여줍니다.
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <PopUp body={popText} isActive={isActive} />
      <Outlet />
      <div className="row justify-content-center" style={{ marginTop: "75px" }}>
        <div
          className="col-12 col-lg-5 text-center"
          style={{ marginBottom: "30px" }}
        >
          {poster}
        </div>

        <div className="col-8 col-lg-6 ms-2">
          <div
            style={{
              display: "flex",
              gap: "30px",
            }}
          >
            {/* 홈페이지 연결 */}
            <Button
              title="홈페이지"
              href={festival.home_page}
              homepage={true}
              style={{ padding: "5px 40px", float: "left" }}
            />
            {/* 장바구니 담기 */}
            <Button
              title="장바구니"
              onClick={() => {
                toCart();
                alertHandler("장바구니에 담겼습니다.");
              }}
              style={{ padding: "5px 40px", float: "left" }}
            />

            {isFavor ? (
              <Button
                title={<i className="fa fa-heart" id="myheart"></i>}
                isRev={true}
                style={{
                  border: "1px solid white",
                  boxShadow: "0 0 3px rgba(0, 0, 0, 0.15)",
                  padding: "5px 30px",
                  float: "left",
                }}
                onClick={() => {
                  if (!is_signed) {
                    alertHandler("로그인후 이용가능합니다.");
                    return;
                  }
                  toFavor();
                  alertHandler("관심리스트에서 제거하였습니다.");
                }}
              />
            ) : (
              <Button
                title={<i className="fa fa-heart" id="myheart"></i>}
                onClick={() => {
                  if (!is_signed) {
                    alertHandler("로그인후 이용가능합니다.");
                    return;
                  }
                  toFavor();
                  alertHandler("관심리스트에 추가했습니다.");
                }}
                style={{ padding: "5px 30px", float: "left" }}
              />
            )}
          </div>

          <form>
            <div className="content" style={{ marginTop: "40px" }}>
              <h1
                style={{
                  marginBottom: "20px",
                  color: "#22b3c1",
                }}
              >
                {festival.title}
              </h1>
              <i
                className="fa fa-clock"
                style={{ float: "left", marginRight: "10px" }}
              ></i>
              <h5 className="list" style={{ marginBottom: "40px" }}>
                {"운영 기간 : "}
                {festival.event_start_date} ~ {festival.event_end_date}
                <br />
                <br />
                <i
                  className="fa fa-map-marker"
                  style={{ marginRight: "10px" }}
                ></i>
                {"주소 : "}
                {festival.addr1}
                <br />
                <br />
                <i
                  className="fa fa-money-bill-wave"
                  style={{ marginRight: "10px" }}
                ></i>
                {"티켓 금액 : "}
                {festival.price}
                {"원"}
              </h5>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-12" style={{ marginTop: "75px" }}>
          <h2
            className="d-flex justify-content-center"
            style={{
              fontSize: "30px",
              marginBottom: "30px",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            {"상세 정보"}
          </h2>
          <p style={{ paddingLeft: "120px", paddingRight: "120px" }}>
            {festival.over_view}
          </p>
          <ReviewList reviewData={reviewData} />
        </div>
      </div>
    </div>
  );
};

export default TicketDetailItem;
