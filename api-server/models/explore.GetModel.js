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
  }, async getAllSelect(conn = pool) {
    try {
      const sql = `
      select
        addr1,
        addr2,
        first_image,
        first_image2,
        tel,
        title,
        event_start_date,
        event_end_date,
        home_page,
        over_view
      from festival_api
      ORDER BY title ASC, event_start_date ASC
      `;
      const [result] = await conn.query(sql);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  }
};

module.exports = ExploreGetModel;
