const pool = require('./pool');

const AuthModel = {
  async insertUser(article){
    try{
      // article = {pid,id,phoneNumber,counter}
      const sql = `insert into auth set ?`;
      const [ result ] = await pool.query(sql, [article]);
      return result.insertId; 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  async getAuthNum(id){
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
      const [ result ] = await pool.query(sql, [id]);
      return result[0] 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  }
}

module.exports = AuthModel