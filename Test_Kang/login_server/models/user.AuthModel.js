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
      const [ result ] = await conn.query(sql, [article.id, article.phoneNumber]);
      return result; 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // id정보 등록
  async insertUser(article, conn=pool){
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
  async getAuthNum(id, conn=pool){
    try{
      // result = {pid, currentTime, expirationTime, counter, auth}
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
      const [ result ] = await conn.query(sql, [id]);
      return result[0] 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },


  // 해당정보 삭제
  async deleteByPID(id, conn=pool){
    try{
      const sql = `delete from auth where pid = ?`;
      await conn.query(sql, [id]);
      return true
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  }
}

module.exports = AuthModel