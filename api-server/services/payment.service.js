// 모델 폴더에서 가져오기
const pool = require("../models/pool");
require("date-utils");
const axios = require("axios");

const PaymentService = {
  async preparePayment() {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const response = await axios({
        url: "https://api.iamport.kr/payments/prepare",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          merchant_uid: "...",
          amount: 1000,
        },
      });
      // DB에 작업 반영
      await conn.commit();
      return response.data;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
};

module.exports = PaymentService;
