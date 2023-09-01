
const AuthModel = require('../models/user.AuthModel');
const pool = require('../models/pool');
require('date-utils')

const AuthService = {
  async auth(article){
    const conn = await pool.getConnection();
    try{
      // 트랜젝션 작업 시작
      await conn.beginTransaction();

      // 중복 제거작업
      const same = await AuthModel.findSame(article,conn);
      let ch = true;
      let id = 0
      same.forEach(async function(element){
        var curTime = new Date();
        var beginTime = new Date(element.currentTime)
        var endTime = new Date(element.expirationTime)
        
        // 해당 인증정보가 유효하지않으면
        if (curTime.getTime()<beginTime.getTime() || curTime.getTime()>endTime.getTime()){
          //해당정보 삭제
          await AuthModel.deleteByPID(element.pid, conn);
        }else{
          // 유효한 정보가 있으면 해당 id 저장
          ch = false;
          id = element.pid;
        }
      });
      // 없으면 생성후 해당 id 저장
      if(ch){
        id = await AuthModel.insertUser(article, conn);
      }
      const result = await AuthModel.getAuthNum(id, conn);
      // DB에 작업 반영
      await conn.commit();
      return result;
    }catch(err){
      // DB 작업 취소
      await conn.rollback();
      throw new Error('Service Error', {cause: err});
    }finally{
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  }
};

module.exports = AuthService;
