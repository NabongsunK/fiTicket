const pool = require("./pool");

const cartModel = {
  //결제 완료
  async payDone(item, conn = pool) {
    try {
      const sql = `insert into paid_tickets set ?`;
      const [result] = await conn.query(sql, [item]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 결제 미완
  async checkOutCancel(login_id, conn = pool) {
    try {
      const sql = `delete from shopping_cart_1 where login_id =?`;
      const [result] = await conn.query(sql, [login_id]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // paidtickets에 결제내역 저장
  async insertPaidTicket(article, conn = pool) {
    // article {login_id,  paid_amount}
    try {
      const sql = `insert into paid_tickets set ?`;
      const [result] = await conn.query(sql, article);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // shopping cart에 구매할티켓정보 저장
  async insertTicket(ticket, conn = pool) {
    // {ticket}={content_id, ticket_quantity, login_id}
    try {
      const sql = `insert into shopping_cart_1 set ?`;
      const [result] = await conn.query(sql, ticket);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // paidtickets에서 정보찾기
  async findPaidByArticle(article, conn = pool) {
    // article = { paid_amount, login_id, id };
    try {
      const sql = `
      select 
        id 
      from paid_tickets 
      where 
        id = ? and
        login_id = ? and
        paid_amount = ? and
        pay_finished = false and
        tickets_deleted = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.login_id,
        article.paid_amount,
      ]);
      return result.length === 1;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // shopping cart에서 정보찾기
  async findCartByArticle(article, conn = pool) {
    // article = { paid_amount, login_id, id };
    try {
      const sql = `
      select 
        id 
      from shopping_cart_1
      where 
        paid_id = ? and
        login_id = ? and
        cart_deleted = false and 
        pay_done = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.login_id,
        article.paid_amount,
      ]);
      return result.length > 0;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // shopping cart 구매처리
  async setDoneCartByArticle(article, conn = pool) {
    // article = { paid_amount, login_id, id };
    try {
      const sql = `
      update
        shopping_cart_1
      set pay_done = true
      where 
        paid_id = ? and
        login_id = ? and
        cart_deleted = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.login_id,
      ]);

      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // paidtickets에서 구매처리
  async setDonePaidByArticle(article, conn = pool) {
    // article = { paid_amount, login_id, id };
    try {
      const sql = `
      update
        paid_tickets 
      set pay_finished = true
      where 
        id = ? and
        login_id = ? and
        paid_amount = ? and
        tickets_deleted = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.login_id,
        article.paid_amount,
      ]);

      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // shopping cart 삭제처리
  async deleteCartByArticle(article, conn = pool) {
    // article = { paid_amount, login_id, id };
    try {
      const sql = `
      update
        shopping_cart_1
      set cart_deleted = true
      where 
        paid_id = ? and
        login_id = ? and
        pay_done = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.login_id,
      ]);

      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // paidtickets에서 구매처리
  async deletePaidByArticle(article, conn = pool) {
    // article = { paid_amount, login_id, id };
    try {
      const sql = `
      update
        paid_tickets 
      set tickets_deleted = true
      where 
        id = ? and
        login_id = ? and
        paid_amount = ? and
        pay_finished = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.login_id,
        article.paid_amount,
      ]);

      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = cartModel;
