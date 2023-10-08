const favoriteModel = require("../models/favorite.model");
const pool = require("../models/pool");

const FavoriteService = {
  async deleteFavor(fes, id) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      await favoriteModel.deleteFavor(fes, id);
      // DB에 작업 반영
      await conn.commit();
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("DB Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async updateFavor(fes, id) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      await favoriteModel.updateFavor(fes, id);
      // DB에 작업 반영
      await conn.commit();
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("DB Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async getFavorList(id) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const result = await favoriteModel.getFavor(id);

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

module.exports = FavoriteService;
