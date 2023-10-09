import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { pop, change } from "../../store/cartSlice";

import styles from "./cartlistitem.module.css";
import { popFavor } from "../../store/favorSlice";

const FavoriteListItem = function (props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_id = useSelector((state) => state.myLoginSlice.user_id);

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteListItem;
