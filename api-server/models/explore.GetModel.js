const pool = require("./pool");

const ExploreGetModel = {
  // 중복검사
  async getListMap(conn = pool) {
    try {
      const sql = `
      select
        id,
        title,
        map_x,
        map_y
      from festival_api
      `;
      const [result] = await conn.query(sql);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = ExploreGetModel;
