import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  const amount = useSelector((state) => state.myCartSlice.amount);

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
      pg: "html5_inicis.INIpayTest{INIpayTest}", //테스트 시 html5_inicis.INIpayTest 기재
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`, //상점에서 생성한 고유 주문번호
      name: "Loca!T 티켓 구매",
      amount: amount, //실제 결제할때만 바꿀것
      // amount: 100,
      buyer_email: user.email,
      buyer_name: user.name,
      buyer_tel: user.phone_number, //필수 파라미터 입니다.
      buyer_addr: "서울특별시 강남구 삼성동",
      buyer_postcode: "123-456",
      //m_redirect_url : '{모바일에서 결제 완료 후 리디렉션 될 URL}',
      escrow: true, //에스크로 결제인 경우 설정
      vbank_due: "YYYYMMDD",
      period: {
        from: "20230101", //YYYYMMDD
        to: "20241231", //YYYYMMDD
      },
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
          paid_amount: amount,
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
      paid_amount: amount,
      // paid_amount: 100,
    };
    paid_id = (await axios.post("/cart", tmp)).data.paid_id;

    return paid_id;
  };

  const handlePayment = () => {
    if (is_signed) {
      props.handleToggle();
      toServer();
      onClickPayment();
    } else {
      // TODO: 안먹음
      props.handleToggle(() => {
        navigate("/login");
      });
    }
  };

  return (
    <div className="row">
      <div className="col-lg-8 p-0"></div>
      <div className="col-lg-4">
        <div className="explore_list_button" onClick={handlePayment}>
          <Link>결제하기</Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;
