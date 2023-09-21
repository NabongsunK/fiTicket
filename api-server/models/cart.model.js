const pool = require("./pool");

const cartModel = {
  // cart에 구매할티켓정보 저장
  async insertCartTicket(ticket, conn = pool) {
    // {ticket}={ticket_id, ticket_quantity, user_id}
    try {
      const sql = `insert into cart set ?`;
      const [result] = await conn.query(sql, ticket);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // cart에서 정보찾기
  async findCartByArticle(article, conn = pool) {
    // article = { paid_amount, user_id, paid_id };
    try {
      const sql = `
      select 
        id 
      from cart
      where 
        paid_id = ? and
        user_id = ? and
        cart_deleted = false and 
        cart_done = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.user_id,
        article.paid_amount,
      ]);
      return result.length > 0;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // cart 구매처리
  async setDoneCartByArticle(article, conn = pool) {
    // article = { paid_amount, user_id, paid_id };
    try {
      const sql = `
      update
        cart
      set cart_done = true
      where 
        paid_id = ? and
        user_id = ? and
        cart_deleted = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.user_id,
      ]);

      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // cart 삭제처리
  async deleteCartByArticle(article, conn = pool) {
    // article = { paid_amount, user_id, paid_id };
    try {
      const sql = `
      update
        cart
      set cart_deleted = true
      where 
        paid_id = ? and
        user_id = ? and
        cart_done = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.user_id,
      ]);

      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // cart_done == 1 & cart_deleted ==0인 리스트 user_id로 찾기
  async history(id, conn = pool) {
    try {
      const sql = `
      select
          ticket_id,
          ticket_quantity
          from cart
      where (cart_done is true and cart_deleted is false and user_id= ? )
      order by cart.created_time;
      `;
      const [result] = await conn.query(sql, [id]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = cartModel;
