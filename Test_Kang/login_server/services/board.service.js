
const AuthModel = require('../models/user.AuthModel');
const pool = require('../models/pool');
require('date-utils')

const AuthService = {
  async getAuth(article){
    //article = {id,phoneNumber}
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
      // result = {pid,currentTime,expirationTime,counter,auth} 
      const result = await AuthModel.getAuthByPID(id, conn);
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
  },

  async doAuth(article){
    // article = {id,phoneNumber,auth}
    const conn = await pool.getConnection();
    try{
      // 트랜젝션 작업 시작
      await conn.beginTransaction();
      const getPid = await AuthModel.checkAuth(article, conn);
      const data = await AuthModel.getAuthByPID(getPid.pid,conn);

      var curTime = new Date();
      var beginTime = new Date(data.currentTime)
      var endTime = new Date(data.expirationTime)

      if(data.auth === article.auth){
        // 인증 완료
        if(curTime.getTime()>=beginTime.getTime() && curTime.getTime()<=endTime.getTime()){
          await AuthModel.deleteByPID(getPid.pid, conn);
          await conn.commit();
          return {ok:true};
        }
        // 인증번호는 맞으나 시간지남
        await AuthModel.deleteByPID(getPid.pid, conn);
        await conn.commit();
        return {ok:false, message:"인증시간만료"}
      }
      // 인증번호 많이틀림
      if(data.counter>4){
        await AuthModel.deleteByPID(getPid.pid, conn);
        await conn.commit();
        return {ok:false, message:"인증번호5회실패"}
      }
      // 시간은맞는데, 틀림
      if(curTime.getTime()>=beginTime.getTime() && curTime.getTime()<=endTime.getTime()){
        await AuthModel.plusCounter(getPid.pid,conn);
        await conn.commit();
        return {ok:false, message:"인증번호틀림"};
      }
      // DB에 작업 반영
      // 시간도 끝났고 틀림
      await AuthModel.deleteByPID(getPid.pid, conn);
      await conn.commit();
      return {ok:false, message:"인증시간만료"}

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
