import Left from "./Left";
import axios from "axios";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const getList = async function () {
  const res = await axios.get("/cart/tickethistory/" + "6");
  return res.data.data;
};

const User = function (props) {
  getList().then((response) => {
    console.log(response);
  });
  return (
    <div
      className={
        props.states.isActive && !props.states.isCart
          ? "right-side-cart-area cart-on"
          : "right-side-cart-area "
      }
      style={{ zIndex: "21474899" }}
    >
      <Left cartNo={props.cartNo} actions={props.actions} />

      <div className="cart-content">
        <div>유저창입니다.</div>
      </div>
    </div>
  );
};

export default User;
