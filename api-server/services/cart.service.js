const cartModel = require("../models/cart.model");
const pool = require("../models/pool");

const CartService = {
  async addCart(item) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();
      await cartModel.checkOut(item);
      const ticket = await cartModel.checkOut(item);

      // DB에 작업 반영
      await conn.commit();
      return ticket;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async checkOut(item) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();
      const id = await cartModel.insertTicket(item);
      const ret = await cartModel.findCartById(id);

      // DB에 작업 반영
      await conn.commit();
      return ret;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async doPay(article) {
    // article = {{tickets}, login_id, paid_amount}
    // {tickets}={content_id, ticket_quantity, login_id}
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const paid_id = await cartModel.insertPaidTicket(
        {
          login_id: article.login_id,
          paid_amount: article.paid_amount,
        },
        conn
      );
      article.tickets.forEach(async (ticket) => {
        const tmp = { ...ticket, login_id: article.login_id, paid_id: paid_id };
        await cartModel.insertTicket(tmp, conn);
      });

      // DB에 작업 반영
      await conn.commit();
      // 이건 나중에 생각
      return true;
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
