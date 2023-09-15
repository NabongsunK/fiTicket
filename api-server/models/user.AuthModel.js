const pool = require("./pool");

const AuthModel = {
  // 중복검사
  async findSame(article, conn = pool) {
    try {
      // article = {login_id,phone_number}
      const sql = `
      select
        id,
        DATE_FORMAT(curr_time, '%Y-%m-%d %H:%i:%s') as curr_time, 
        DATE_FORMAT(expiration_time,  '%Y-%m-%d %H:%i:%s') as expiration_time
      from auth
      where
        login_id = ? and
        phone_number = ?
      `;
      const [result] = await conn.query(sql, [
        article.login_id,
        article.phone_number,
      ]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // id정보 등록
  async insertAuth(article, conn = pool) {
    try {
      // article = {login_id,phone_number,authentication_number,curr_time,expiration_time}
      const sql = `insert into auth set ?`;
      const [result] = await conn.query(sql, [article]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 인증정보 리턴
  async getAuthByPID(id, conn = pool) {
    try {
      const sql = `
      select
        id, 
        DATE_FORMAT(curr_time, '%Y-%m-%d %H:%i:%s') as curr_time, 
        DATE_FORMAT(expiration_time,  '%Y-%m-%d %H:%i:%s') as expiration_time, 
        count, 
        authentication_number
      from auth
      where id = ?
        `;
      const [result] = await conn.query(sql, [id]);
      return result[0];
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 해당정보 삭제
  async deleteByPID(id, conn = pool) {
    try {
      const sql = `delete from auth where id = ?`;
      await conn.query(sql, [id]);
      return true;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 인증번호조회
  async checkAuth(article, conn = pool) {
    // article = {id,phoneNumber,auth}
    // res = {id}
    try {
      const sql = `select id from auth where login_id=? and phone_number=?`;
      const [result] = await conn.query(sql, [
        article.login_id,
        article.phone_number,
      ]);
      return result[0];
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 카운트증가
  async plusCounter(id, conn = pool) {
    try {
      const sql = `update auth set count = count+1 where id = ?`;
      await conn.query(sql, [id]);
      return true;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = AuthModel;
