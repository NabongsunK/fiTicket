import { Link } from "react-router-dom";
import { push, pop } from "../../store/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import HomepageBtn from "../../components/common/HomepageBtn";

const DealsListItem = function (props) {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.myCartSlice.myCarts);
  // console.log(props.festival);
  const toCart = function () {
    dispatch(
      push({
        ticket: {
          badge: props.festival.addr1 + " " + props.festival.addr2,
          name: props.festival.title,
          quantity: 1,
          price: props.festival.price,
          image: props.festival.first_image2,
          ticket_id: props.festival.id,
          index: myCart.length,
        },
      })
    );
  };

  const img = props.festival.first_image;

  const poster =
    props.festival.first_image === "" ? (
      <Link to={`/explore/${props.festival.id}`}>
        <div
          className="image"
          style={{
            backgroundImage: "url('assets/images/fes_default.jpg')",
            width: "100%",
            height: "100%",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Link>
    ) : (
      <Link to={`/explore/${props.festival.id}`}>
        <div
          className="image"
          style={{
            backgroundImage: `url('${img}')`,
            width: "100%",
            height: "100%",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Link>
    );

  return (
    <div className="col-lg-10 col-sm-6 offset-lg-1">
      <div className="item">
        <div className="row">
          <div
            className="col-lg-4"
            style={{ paddingRight: "45px", overflow: "hidden" }}
          >
            {poster}
          </div>
          <div className="col-lg-7 align-self-center">
            <div className="content">
              <Link to={`/explore/${props.festival.id}`}>
                <span className="info">
                  *D-{props.festival.d_day}
                  {props.showImage && (
                    <img
                      src="assets/images/good.jpg"
                      alt="Developer Image"
                      style={{ margin: "0 20px 0 10px", width: "30px" }}
                    />
                  )}
                </span>
                <h4>{props.festival.title}</h4>
                <div className="row">
                  <div className="col-11" style={{ marginBottom: "4px" }}>
                    <i className="fa fa-clock"></i>
                    <span className="list">
                      {props.festival.event_start_date} -
                      {props.festival.event_end_date}
                    </span>
                  </div>
                </div>
                <p>
                  {props.festival.over_view.substring(0, 64)}
                  {props.festival.over_view.length > 64 ? "......" : ""}
                </p>
              </Link>
            </div>
          </div>
          <div className="col-lg-1 align-self-center">
            <div className="explore_list_button">
              <HomepageBtn
                key={props.festival.id}
                homepage_src={props.festival.home_page}
              />
            </div>
            <div className="explore_list_button" onClick={toCart}>
              <Link onClick={props.alertHandler} style={{ marginTop: 0 }}>
                <i className="fa fa-cart-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsListItem;
