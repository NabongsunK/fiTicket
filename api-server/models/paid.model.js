const pool = require("./pool");

const paidModel = {
  // paid에 결제내역 저장
  async insertPaidTicket(article, conn = pool) {
    // article {user_id,  paid_amount}
    try {
      const sql = `insert into paid set ?`;
      const [result] = await conn.query(sql, article);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // paid에서 정보찾기
  async findPaidByArticle(article, conn = pool) {
    // article = { paid_amount, user_id, paid_id };
    try {
      const sql = `
      select 
        id 
      from paid
      where 
        id = ? and
        user_id = ? and
        paid_amount = ? and
        paid_done = false and
        paid_deleted = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.user_id,
        article.paid_amount,
      ]);
      return result.length === 1;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // paid에서 구매처리
  async setDonePaidByArticle(article, conn = pool) {
    // article = { paid_amount, user_id, paid_id };
    try {
      const sql = `
      update
        paid
      set paid_done = true
      where 
        id = ? and
        user_id = ? and
        paid_amount = ? and
        paid_deleted = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.user_id,
        article.paid_amount,
      ]);

      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // paid에서 삭제처리
  async deletePaidByArticle(article, conn = pool) {
    // article = { paid_amount, user_id, paid_id };
    try {
      console.log(article);
      const sql = `
      update
        paid
      set paid_deleted = true
      where 
        id = ? and
        user_id = ? and
        paid_amount = ? and
        paid_done = false
      `;
      const [result] = await conn.query(sql, [
        article.paid_id,
        article.user_id,
        article.paid_amount,
      ]);

      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = paidModel;
