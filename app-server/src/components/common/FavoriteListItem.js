import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { pop, change } from "../../store/cartSlice";

import styles from "./cartlistitem.module.css";

const FavoriteListItem = function (props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.myCartSlice.myCarts);
  const navigate = useNavigate();

  const removeItem = function (id) {
    cartItems.forEach((item, i) => {
      if (item.index === id) {
        dispatch(pop({ index: i }));
        return false;
      }
    });
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
          navigate(`/explore/${props.item.fes_id}`);
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
