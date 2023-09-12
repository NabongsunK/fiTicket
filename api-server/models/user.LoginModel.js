const pool = require('./pool');

const LoginModel = {

  // 닉네임중복검사
  async findSameIdNum(article, conn=pool){
    try{
      // article = {id,password}
      const sql = `
      select
        pid
      from userDB
      where
        id = ?
      `;
      const [ result ] = await conn.query(sql, [article.id]);
      return result.length; 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 닉네임/비밀번호비교
  async findSame(article, conn=pool){
    try{
      // article = {id,password}
      const sql = `
      select
        pid
      from userDB
      where
        id = ? and
        password = ?
      `;
      const [ result ] = await conn.query(sql, [article.id, article.password]);
      return result[0]; 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // signin
  async chTrue(pid, conn=pool){
    try{
      const sql = `update userDB set isSigned = true where pid = ?`;
      await conn.query(sql, [pid]);
      return true;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // signout
  async chFalse(pid, conn=pool){
    try{
      const sql = `update userDB set isSigned = false where pid = ?`;
      await conn.query(sql, [pid]);
      return true;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // id정보 등록
  async insertUser(article, conn=pool){
    try{
      // article = {id,phoneNumber,password,role,email,paymentInformation}
      const sql = `insert into userDB set ?`;
      const [ result ] = await conn.query(sql, [article]);
      return result.insertId; 

    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  
}

module.exports = LoginModel;