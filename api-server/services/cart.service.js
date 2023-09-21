const cartModel = require("../models/cart.model");
const paidModel = require("../models/paid.model");
const ExploreGetModel = require("../models/explore.GetModel");
const pool = require("../models/pool");

const CartService = {
  // 결제승인전
  async doPay(article) {
    // article = {{tickets}, user_id, paid_amount}
    // {tickets}={ticket_id, ticket_quantity}
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      // paid 에 넣기
      const paid_id = await paidModel.insertPaidTicket(
        {
          user_id: article.user_id,
          paid_amount: article.paid_amount,
        },
        conn
      );
      article.tickets.forEach(async (ticket) => {
        const tmp = { ...ticket, user_id: article.user_id, paid_id: paid_id };
        await cartModel.insertCartTicket(tmp, conn);
      });

      // DB에 작업 반영
      await conn.commit();
      return paid_id;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  // 결제성공
  async donePay(article) {
    // article = { paid_amount, user_id, paid_id };
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      if (
        (await paidModel.findPaidByArticle(article, conn)) &&
        (await cartModel.findCartByArticle(article, conn))
      ) {
        await paidModel.setDonePaidByArticle(article, conn);
        await cartModel.setDoneCartByArticle(article, conn);
        // DB에 작업 반영
        await conn.commit();
        return { ok: true };
      } else {
        await paidModel.deletePaidByArticle(article, conn);
        await cartModel.deleteCartByArticle(article, conn);
        // DB에 작업 반영
        await conn.commit();
        return { ok: false };
      }
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async dontPay(article) {
    // article = { paid_amount, login_id, paid_id };
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      if (
        (await paidModel.findPaidByArticle(article, conn)) &&
        (await cartModel.findCartByArticle(article, conn))
      ) {
        await paidModel.deletePaidByArticle(article, conn);
        await cartModel.deleteCartByArticle(article, conn);
        // DB에 작업 반영
        await conn.commit();
        return { ok: true };
      }
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async getPayDetails(id) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const ticket_ids = await cartModel.getTicketIdsByUserId(id);

      var data = [];
      ticket_ids.forEach(async (item) => {
        const tmp = {
          ...(await ExploreGetModel.getTicketById(item.ticket_id, conn)),
          ticket_quantity: item.ticket_quantity,
        };
        data.push(tmp);
      });

      // DB에 작업 반영
      await conn.commit();
      return { ok: true, data };
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

module.exports = CartService;
