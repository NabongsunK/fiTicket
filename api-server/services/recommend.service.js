const ExploreGetModel = require("../models/explore.GetModel");
const pool = require("../models/pool");

const RecommendService = {
  async getRecommends() {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const result = await ExploreGetModel.recommends();
      // DB에 작업 반영
      await conn.commit();
      return result;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("DB Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async getAreaRecommends(area_code) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const result = await ExploreGetModel.areaRecommends(area_code);
      // DB에 작업 반영
      await conn.commit();
      return result;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("DB Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
};

module.exports = RecommendService;
