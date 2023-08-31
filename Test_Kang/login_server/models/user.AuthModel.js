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
      // result = {pid,currentTime,expirationTime,counter,authNum}
      const sql = `
      select
        pid, currentTime, expirationTime,counter
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