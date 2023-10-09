const pool = require("./pool");

const favoriteModel = {
  // 좋아요 취소
  async deleteFavor(fes, id, conn = pool) {
    try {
      const sql = `
        delete from favorite where fes_id = ? and user_id = ?
      `;
      const [result] = await conn.query(sql, [fes, id]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // 좋아요
  async updateFavor(fes, id, conn = pool) {
    try {
      const sql = `
        insert into favorite(fes_id, user_id) VALUES (?, ?)
      `;
      const [result] = await conn.query(sql, [fes, id]);
      // console.log(result);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // 좋아요 목록 조회
  async getFavor(id, conn = pool) {
    try {
      const sql = `
      select
        favorite.user_id,
        favorite.fes_id,
        festival_api.title,
        festival_api.first_image as first_image,
        favorite.create_at
      from favorite
      left join festival_api on favorite.fes_id = festival_api.id
      where favorite.user_id = ?
      order by favorite.create_at desc
      `;
      const [result] = await conn.query(sql, [id]);
      console.log(result);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = favoriteModel;
