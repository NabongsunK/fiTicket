import axios from "axios";
import CryptoJS from "crypto-js";
const test = axios.create({
  baseURL: "https://sens.apigw.ntruss.com",
});

function Auth() {
  const postSms = async function (phone_number) {
    const url = "/sms/v2/services/ncp:sms:kr:314852427266:localt/messages";
    const body = {
      type: "SMS",
      contentType: "COMM",
      from: "01020597105",
      content: "포스트맨 localT test 입니다.",
      messages: [
        {
          to: phone_number,
          content: "인증번호",
        },
      ],
    };
    const currentTimeMillis = new Date().getTime();
    const access_key = "g5OTKOM5XcOo5EEUO2KG";
    const secret_key = "JOJqIxWV7vB1Z0IAquhxqPX2Vi737UC9d54HU42P";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-ncp-apigw-timestamp": currentTimeMillis,
      "x-ncp-iam-access-key": access_key,
      "x-ncp-apigw-signature-v2": makeSignature(access_key, secret_key),
    };

    const res = await test.post(url, { body: body }, { headers: headers });
    console.log(res);
  };

  function makeSignature(access_key, secret_key) {
    const currentTimeMillis = new Date().getTime();
    var space = " "; // one space
    var newLine = "\n"; // new line
    var method = "POST"; // method
    var url = "/sms/v2/services"; // url (include query string)
    var timestamp = currentTimeMillis; // current timestamp (epoch)
    var accessKey = access_key; // access key id (from portal or Sub Account)
    var secretKey = secret_key; // secret key (from portal or Sub Account)

    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url);
    hmac.update(newLine);
    hmac.update(timestamp);
    // hmac.update(newLine);
    // hmac.update(accessKey);

    var hash = hmac.finalize();
    console.log(hash.toString(CryptoJS.enc.Base64));
    return hash.toString(CryptoJS.enc.Base64);
  }
  postSms("01020597105");
  return <div>인증</div>;
}

export default Auth;
