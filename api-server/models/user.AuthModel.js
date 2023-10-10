const pool = require("./pool");
const axios = require("axios");
const CryptoJS = require("crypto-js");
const test = axios.create({
  baseURL: "https://sens.apigw.ntruss.com",
});
const test2 = axios.create({
  baseURL: "https://naveropenapi.apigw.ntruss.com/util/v1",
});
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

  async postSms(phone_number, authentication_number) {
    const url =
      "/sms/v2/services/ncp%3asms%3akr%3a314852427266%3alocalt/messages";
    const body = {
      type: "SMS",
      from: "01020597105",
      content: `안녕하세요! loca!T 팀입니다`,
      messages: [
        {
          to: phone_number,
          content: `안녕하세요! loca!T 팀입니다. 고객님의 인증번호는 "${authentication_number}"입니다. 안전한 서비스 이용을 위해 타인에게 공유하지 마세요. 감사합니다.`,
        },
      ],
    };
    const currentTime = Date.now().toString();
    const access_key = "g5OTKOM5XcOo5EEUO2KG";
    const secret_key = "JOJqIxWV7vB1Z0IAquhxqPX2Vi737UC9d54HU42P";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-ncp-apigw-timestamp": currentTime,
      "x-ncp-iam-access-key": access_key,
      "x-ncp-apigw-signature-v2": this.makeSignature(
        access_key,
        secret_key,
        currentTime
      ),
    };

    const res = await test.post(url, body, { headers: headers });
    return res;
  },

  async getQR(query) {
    const url = "/shorturl?url=" + query;
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "X-NCP-APIGW-API-KEY-ID": "3zo9m4bmoi",
      "X-NCP-APIGW-API-KEY": "AJwrtnDR3BV04zLAFE4mD25vEZEP0JDrAzAWsPdI",
    };

    const res = await test2.get(url, { headers: headers });

    console.log(res.data.result.url);
    return res.data.result.url;
  },

  makeSignature(access_key, secret_key, time) {
    var space = " "; // one space
    var newLine = "\n"; // new line
    var method = "POST"; // method
    var url =
      "/sms/v2/services/ncp%3asms%3akr%3a314852427266%3alocalt/messages"; // url (include query string)
    var timestamp = time; // current timestamp (epoch)
    var accessKey = access_key; // access key id (from portal or Sub Account)
    var secretKey = secret_key; // secret key (from portal or Sub Account)

    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url);
    hmac.update(newLine);
    hmac.update(timestamp);
    hmac.update(newLine);
    hmac.update(accessKey);

    var hash = hmac.finalize();
    return hash.toString(CryptoJS.enc.Base64);
  },
};

module.exports = AuthModel;
