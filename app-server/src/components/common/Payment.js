import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:4400/api";

function Payment() {
  const paymentsTickets = useSelector((state) => state.myCartSlice.myCarts);
  const onClickPayment = function () {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp37467640");
    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "kakaopay", // PG사
      pay_method: "kakaopay", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1200, // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };
  /* 3. 콜백 함수 정의하기 */
  const callback = async function (response) {
    const { success, merchant_uid, error_msg } = response;
    console.log(success);
    console.log(merchant_uid);
    console.log(error_msg);
    console.log(response);

    if (success) {
      alert("결제 성공");

      // 결제 성공 - 서버로 데이터 전송
      try {
        const serverResponse = await toServer(response);
        console.log(serverResponse);
      } catch (err) {
        console.error("서버로 데이터 전송 중 에러 발생", err);
      }
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };
  // 이건 결제버튼 누르면 실행되야하는것
  const toServer = function () {
    console.log(paymentsTickets);
    paymentsTickets.forEach(async (ticket) => {
      const res = await axios.post("/cart", {
        ticket_id: ticket.ticket_id,
        ticket_quantity: ticket.quantity,
        login_id: 4,
      });
      console.log(res);
    });
  };
  return (
    <div className="checkout-btn mt-100">
      <Link
        className="btn essence-btn"
        style={{ backgroundColor: "#22b3c1", marginLeft: "10%" }}
        onClick={() => {
          toServer();
          onClickPayment();
        }}
      >
        결제하기
      </Link>
    </div>
  );
}

export default Payment;
