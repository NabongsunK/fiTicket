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
      const area_code_list = [
        0, 1, 31, 2, 32, 8, 3, 34, 33, 5, 38, 37, 6, 4, 7, 35, 36, 39,
      ];

      const data = {};
      area_code_list.forEach(async (area_code) => {
        const content_type_id_arr = [14, 15, 39];
        const tmp = {};
        content_type_id_arr.forEach(async (content_type_id) => {
          if (area_code == 0) {
            tmp[content_type_id] = await ExploreGetModel.getListMap(
              content_type_id,
              conn
            );
          } else {
            tmp[content_type_id] = await ExploreGetModel.getListMapByAreaCode(
              content_type_id,
              area_code,
              conn
            );
          }
        });
        // getListSelectParking()은 parking.csv에서 id, map_x, map_y, title만 받아온다
        // parking.csv의 전체를 받아오려면 getListParking()을 쓰면 된다.
        if (area_code == 0) {
          tmp["28"] = await ExploreGetModel.getListSelectParking();
        } else {
          // tmp["28"] = await ExploreGetModel.getListSelectParking();
          tmp["28"] =
            await ExploreGetModel.getListSelectParkingByAreaCode(area_code);
        }
        data[area_code] = tmp;
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
  async toggleRec(id) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      await ExploreGetModel.changeToRec(id);
      const result = await ExploreService.getAllList();
      // DB에 작업 반영
      await conn.commit();
      return result.data;
    } catch (err) {
      // DB 작업 취소
      await conn.rollback();
      throw new Error("DB Error", { cause: err });
    } finally {
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  },
  async updateFes(id, article) {
    const conn = await pool.getConnection();
    try {
      // 트랜젝션 작업 시작
      await conn.beginTransaction();
      await ExploreGetModel.updateFestival(id, article);
      const result = await ExploreService.getAllList();

      // DB에 작업 반영
      await conn.commit();
      return result.data;
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

module.exports = ExploreService;
