import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { pop, change, push } from "../../store/cartSlice";

import styles from "./cartlistitem.module.css";
import { popFavor } from "../../store/favorSlice";
import Button from "./Button";

const FavoriteListItem = function (props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_id = useSelector((state) => state.myLoginSlice.user_id);
  const myCart = useSelector((state) => state.myCartSlice.myCarts);
  console.log(props.item);

  const removeItem = function () {
    dispatch(
      popFavor({
        ticket: {
          ticket_id: props.item.ticket_id,
        },
        user_id: user_id,
      })
    );
  };

  const toCart = function () {
    dispatch(
      push({
        ticket: {
          badge: props.festival.addr1 + " " + props.festival.addr2,
          name: props.festival.title,
          quantity: 1,
          price: props.festival.price,
          image: props.festival.first_image,
          ticket_id: props.festival.id,
          index: myCart.length,
        },
      })
    );
  };

  const img = props.item.first_image;

  const poster =
    props.item.first_image === "" ? (
      <div
        className={styles.mycartitem}
        style={{
          backgroundImage: "url('/assets/images/fes_default.jpg')",
          // width: "",
          height: "200px",
          backgroundSize: "cover",
        }}
      ></div>
    ) : (
      <div
        className={styles.mycartitem}
        style={{
          backgroundImage: `url("${img}")`,
          width: "100%",
          height: "200px",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    );

  return (
    <div className="single-cart-item">
      <div
        onClick={() => {
          navigate(`/explore/${props.item.ticket_id}`);
        }}
        className="product-image"
      >
        <div className="row">
          <div className="col-lg-4 p-0">{poster}</div>

          <div className="col-lg-8">
            <div className="cart-item-desc">
              <span className="product-remove">
                <i
                  className="fa fa-close"
                  aria-hidden="true"
                  onClick={() => removeItem(props.item.index)}
                ></i>
              </span>

              <div onClick={props.handleToggle}>
                <h6>{props.item.title}</h6>
                <Button
                  onClick={() => {
                    toCart();
                    props.alertHandler("장바구니에 담겼습니다.");
                  }}
                  title={<i className="fa fa-cart-plus"></i>}
                  style={{
                    marginTop: 0,
                    border: "1px solid white",
                    fontSize: "24px",
                    float: "right",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteListItem;
