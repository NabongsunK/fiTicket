const reviewModel = require("../models/review.model");
const pool = require("../models/pool");

const ReviewService = {
  async getReview() {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();
      const result = await reviewModel.findReview();
      // DB 에 작업 반영
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
  async findReviewByTicket(ticket_id) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const review = await reviewModel.findByTicket(ticket_id);
      // DB에 작업 반영
      await conn.commit();
      return review;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("DB Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async writeReview(article) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const review = await reviewModel.create(article);
      // DB에 작업 반영
      await conn.commit();
      return review;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("DB Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async getBestReview() {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const list = await reviewModel.bestReview();
      // DB에 작업 반영
      await conn.commit();
      return list;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("DB Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async toggleReview(id) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      await reviewModel.changeToBest(id);
      const result = await ReviewService.getReview();
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
  async deleteReview(id) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      await reviewModel.deleteReview(id);
      const result = await ReviewService.getReview();
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
  async updateReview(id, article) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      await reviewModel.updateReview(id, article);
      const result = await ReviewService.getReview();
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

module.exports = ReviewService;
