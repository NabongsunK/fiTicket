// var express = require("express");
// var router = express.Router();
// var axios = require('axios');

// const PaymentService = require("../services/payment.service");

// // 결제 시도
// router.post("/prepare-payment", async (req, res, next) => {
//   const { merchant_uid, amount } = req.body;

//   try {
//     const paymentResult = await PaymentService.preparePayment(
//       merchant_uid,
//       amount
//     );
//     // 여기서 paymentResult를 클라이언트에 응답으로 보낼 수 있음
//     res.json(paymentResult);
//   } catch (err) {
//     next(err);
//     console.error("Payment preparation error:", err);
//     //res.status(500).json({ error: "Payment preparation failed" });
//   }
// });

// //결제 결과 서버 수신
// router.post("/payments/complete", async (req, res, next) => {
//   try {
//     // req의 body에서 imp_uid, merchant_uid 추출
//     const { imp_uid, merchant_uid } = req.body;

//     // 액세스 토큰(access token) 발급 받기
//     const getToken = await axios({
//       url: "https://api.iamport.kr/users/getToken",
//       method: "post", // POST method
//       headers: { "Content-Type": "application/json" },
//       data: {
//         imp_key: "5741077445827228", //REST API KEY
//         imp_secret:
//           "qKjavgFxZsMrG6wwZZxIqUgytzs93dlkxVaS1lCkV4NRzYOAo1xDkUKZc0d5vlTbjWR0MsbaFUQkv9xz",
//       }, //REST API Secret
//     });
//     const { access_token } = getToken.data; // 인증 토큰
//     // imp_uid로 포트원 서버에서 결제 정보 조회
//     const getPaymentData = await axios({
//         // imp_uid 전달
//         url: `https://api.iamport.kr/payments/${imp_uid}`,
//         // GET method
//         method: "get",
//         // 인증 토큰 Authorization header에 추가
//         headers: { "Authorization": access_token }
//       });
//       const paymentData = getPaymentData.data.response; // 조회한 결제 정보

//     res.status(200).json({ message: "Payment complete" });
//   } catch (err) {
//     next(err);
//     res.status(400).send(err);
//     res.json({ imp_uid, merchant_uid });
//     console.error("Payment error:", err);
//   }
// });

// module.exports = router;
