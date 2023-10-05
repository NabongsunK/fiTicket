const pool = require("./pool");

const FindModel = {
  // 이름, 전화번호 비교
  async findSameLoginIdNum(article, conn = pool) {
    try {
      // article = {login_id,password}
      const sql = `
      select
        id
      from users
      where
        login_id = ? and 
        phone_number =?
      `;
      const [result] = await conn.query(sql, [
        article.login_id,
        article.phone_number,
      ]);
      return result.length;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  async changePw(article, conn = pool) {
    try {
      const sql = `update users set password = ? WHERE id = ?`;
      const [result] = await conn.query(sql, [article]);
      return result.affectedRows > 0;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = FindModel;
