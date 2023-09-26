const ExploreGetModel = require("../models/explore.GetModel");
const pool = require("../models/pool");
require("date-utils");

//로그인상태를 어떻게 구별하지?
//authDB랑 연결을 어떻게? 왜 시키지?
//로그인시도일때 비밀번호만 틀렸을떄 알려주기

const ExploreService = {
  async getListForMap() {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const content_type_id_arr = [12, 14, 15, 39];
      const data = {};
      content_type_id_arr.forEach(async (content_type_id) => {
        data[content_type_id] = await ExploreGetModel.getListMap(
          content_type_id,
          conn
        );
      });
      await ExploreGetModel.getListParking();
      // DB에 작업 반영
      await conn.commit();
      return { data, ok: true, length: data.length };
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async getAllList() {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const data = await ExploreGetModel.getAllSelect(conn);
      // DB에 작업 반영
      await conn.commit();
      return { data, ok: true, length: data.length };
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async getRegionList(query) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();
      const data = await ExploreGetModel.getRegionSelect(
        "%" + decodeURI(query) + "%",
        conn
      );
      // DB에 작업 반영
      await conn.commit();
      return { data, ok: true };
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async getRegionListByAreaCode(area_code) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();
      var data;
      if (area_code == 0) {
        data = await ExploreGetModel.getAllSelect(conn);
      } else {
        data = await ExploreGetModel.getRegionSelectByAreaCode(area_code, conn);
      }
      // DB에 작업 반영
      await conn.commit();
      return { data, ok: true, length: data.length };
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async getTicketByIds(article) {
    // article = [{ticket_id, ticket_quantity}]
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      const data = [];
      article.forEach(async (item) => {
        const tmp = {
          ...(await ExploreGetModel.getTicketById(item.ticket_id, conn)),
          ticket_quantity: item.ticket_quantity,
        };
        data.push(tmp);
      });

      // DB에 작업 반영
      await conn.commit();
      return { data, ok: true, length: data.length };
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("Service Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
};

module.exports = ExploreService;
