const pool = require('./pool');

const AuthModel = {
  // 중복검사
  async findSame(article, conn=pool){
    try{
      // article = {id,phoneNumber}
      const sql = `
      select
        pid,
        DATE_FORMAT(currentTime, '%Y-%m-%d %H:%i:%s') as currentTime, 
        DATE_FORMAT(expirationTime,  '%Y-%m-%d %H:%i:%s') as expirationTime
      from auth
      where
        id = ? and
        phoneNumber = ?
      `;
      const [ result ] = await conn.query(sql, [article.id, article.phonenumber]);
      return result; 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // id정보 등록
  async insertAuth(article, conn=pool){
    try{
      // article = {id,phoneNumber}
      const sql = `insert into auth set ?`;
      const [ result ] = await conn.query(sql, [article]);
      return result.insertId; 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 인증정보 리턴
  async getAuthByPID(pid, conn=pool){
    try{
      const sql = `
      select
        pid, 
        DATE_FORMAT(currentTime, '%Y-%m-%d %H:%i:%s') as currentTime, 
        DATE_FORMAT(expirationTime,  '%Y-%m-%d %H:%i:%s') as expirationTime, 
        counter, 
        auth
      from auth
      where pid = ?
        `;
      const [ result ] = await conn.query(sql, [pid]);
      return result[0] ;

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },


  // 해당정보 삭제
  async deleteByPID(pid, conn=pool){
    try{
      const sql = `delete from auth where pid = ?`;
      await conn.query(sql, [pid]);
      return true;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 인증번호조회
  async checkAuth(article, conn=pool){
    // article = {id,phoneNumber,auth}
    // res = {pid}
    try{
      const sql = `select pid from auth where id=? and phoneNumber=?`;
      const [ result ] = await conn.query(sql, [article.id, article.phonenumber]);
      return result[0];
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 카운트증가
  async plusCounter(pid, conn=pool){
    try{
      const sql = `update auth set counter = counter+1 where pid = ?`;
      await conn.query(sql, [pid]);
      return true;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

}

module.exports = AuthModel