const pool = require('./pool');

const LoginModel = {

  // 로그인
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

  
}

module.exports = AuthModel