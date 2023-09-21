import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:4400/api";
import { deletes } from "../../store/cartSlice";
const getUser = async function (user_id) {
  const res = await axios.post("/login/getuser", {
    user_id: user_id,
  });
  return res.data.data;
};

function Payment(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  const user_id = useSelector((state) => state.myLoginSlice.user_id);

  useEffect(() => {
    getUser(user_id).then((response) => {
      setUser(response);
    });
  }, [is_signed]);

  const paymentsTickets = useSelector((state) => state.myCartSlice.myCarts);
  var paid_id;
  const onClickPayment = function () {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp37467640");
    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "kakaopay", // PG사
      pay_method: "kakaopay", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: props.amount, // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: user.name, // 구매자 이름
      buyer_tel: user.phone_number, // 구매자 전화번호
      buyer_email: user.email, // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };
  /* 3. 콜백 함수 정의하기 */
  const callback = async function (response) {
    const { success, merchant_uid, error_msg } = response;
    if (success) {
      // 결제 성공 - 서버로 데이터 전송
      try {
        const tmp = {
          paid_amount: response.paid_amount,
          user_id: user.id,
          paid_id: paid_id,
        };
        const db = await axios.post("/cart/check", tmp);
        if (db.data.ok) {
          alert("결제 성공");
          dispatch(deletes());
        }
      } catch (err) {
        console.error("서버로 데이터 전송 중 에러 발생", err);
      }
    } else {
      try {
        const tmp = {
          // TODO: 결제취소시에 페이지에 저장된 금액으로 검색함, 결제성공시에도 데이터에 에러핸들러가 필요할듯
          paid_amount: props.amount,
          user_id: user.id,
          paid_id: paid_id,
        };
        await axios.post("/cart/checkfail", tmp);
      } catch (err) {
        console.error("서버로 데이터 전송 중 에러 발생", err);
      }
      alert(`결제 실패: ${error_msg}`);
    }
  };
  // 이건 결제버튼 누르면 실행되야하는것
  const toServer = async function () {
    const tickets = paymentsTickets.map((ticket) => {
      return { ticket_id: ticket.ticket_id, ticket_quantity: ticket.quantity };
    });
    const tmp = {
      tickets: tickets,
      user_id: user.id,
      paid_amount: props.amount,
    };
    paid_id = (await axios.post("/cart", tmp)).data.paid_id;

    return paid_id;
  };

  return (
    <div className="checkout-btn mt-100">
      <Link
        className="btn essence-btn"
        style={{ backgroundColor: "#22b3c1", marginLeft: "10%" }}
        onClick={() => {
          if (is_signed) {
            props.handleToggle();
            toServer();
            onClickPayment();
          } else {
            // TODO: 안먹음
            console.log("로그인하세요");
            props.handleToggle();
            navigate("/signIn");
          }
        }}
      >
        결제하기
      </Link>
    </div>
  );
}

export default Payment;
