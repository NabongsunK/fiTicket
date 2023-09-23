import { Link } from "react-router-dom";
import { push, pop } from "../../store/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const DealsListItem = function (props) {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.myCartSlice.myCarts);

  const toCart = function () {
    dispatch(
      push({
        ticket: {
          // 여기 지역추가
          badge: props.festival.addr1 + " " + props.festival.addr2,
          name: props.festival.title,
          quantity: 1,
          // 여기 가격추가
          price: props.festival.id,
          image: props.festival.first_image2,
          ticket_id: props.festival.id,
          index: myCart.length,
        },
      })
    );
  };

  const poster =
    props.festival.first_image === "" ? (
      <img src="assets/images/fes_default.jpg" alt="" />
    ) : (
      <img src={props.festival.first_image} alt="" />
    );
  return (
    <div className="col-lg-6 col-sm-6">
      <div className="item">
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <Link to={`/explore/${props.festival.id}`}>{poster}</Link>
              {/* <img src="http://tong.visitkorea.or.kr/cms/resource/75/2769775_image2_1.JPG" alt="" /> */}
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="content">
              <span className="info">*D-{props.festival.d_day}</span>
              <Link to={`/explore/${props.festival.id}`}>
                <h4>{props.festival.title}</h4>
              </Link>

              <div className="row">
                <div className="col-11">
                  <i className="fa fa-clock"></i>
                  <span className="list">
                    {props.festival.event_start_date} -
                    {props.festival.event_end_date}
                  </span>
                </div>
              </div>
              <p>
                {props.festival.over_view.substring(0, 64)}{" "}
                {props.festival.over_view.length > 64 ? "......" : ""}
              </p>
              <div className="row">
                <div className="col-lg-3">
                  {/* 홈페이지 연결 */}
                  <div className="explore_list_button">
                    <Link to="https://www.chf.or.kr/short/8sQs" target="_blank">
                      <i className="fa fa-home"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3">
                  {/* 장바구니 담기 */}
                  <div className="explore_list_button" onClick={toCart}>
                    <Link onClick={props.alertHandler}>
                      <i className="fa fa-cart-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsListItem;
