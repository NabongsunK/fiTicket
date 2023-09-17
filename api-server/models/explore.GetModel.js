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
  async getAllSelect(conn = pool) {
    try {
      const sql = `
      SELECT
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
      FROM festival_api

      WHERE
      first_image IS NOT NULL
      AND title IS NOT NULL
      AND event_start_date IS NOT NULL
      AND event_end_date IS NOT NULL
      AND over_view IS NOT NULL
      ORDER BY event_start_date ASC
      `;
      const [result] = await conn.query(sql);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  async getRegionSelect(query, conn = pool) {
    try {
      const sql = `
      SELECT
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
      FROM festival_api

      WHERE
      first_image IS NOT NULL
      AND title IS NOT NULL
      AND event_start_date IS NOT NULL
      AND event_end_date IS NOT NULL
      AND over_view IS NOT NULL
      AND addr1 Like ?
      ORDER BY event_start_date ASC
      `;
      const [result] = await conn.query(sql, [query]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  async getRegionSelectByAreaCode(area_code, conn = pool) {
    try {
      const sql = `
      SELECT
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
      FROM festival_api

      WHERE
      first_image IS NOT NULL
      AND title IS NOT NULL
      AND event_start_date IS NOT NULL
      AND event_end_date IS NOT NULL
      AND over_view IS NOT NULL
      AND area_code = ?
      ORDER BY event_start_date ASC
      `;
      const [result] = await conn.query(sql, [area_code]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = ExploreGetModel;
