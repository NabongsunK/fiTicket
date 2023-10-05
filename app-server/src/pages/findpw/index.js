import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hasing from "../../store/hasing";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

function Findpw() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // redux 이용하기
  const [LoginId, setLoginId] = useState();
  const [FindPn, setFindPn] = useState();
  const [FindPw, setFindPw] = useState();
  const [FindPwConfirm, setFindPwConfirm] = useState();
  const [FindAuth, setFindAuth] = useState();

  const [isActive, setActive] = useState("false");
  const [isSend, setSend] = useState("false");

  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
    return regex.test(password);
  };

  const ChangePw = async function () {
    //유효성검사
    if (!isValidPassword(FindPw)) {
      alert("비밀번호는 8자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.");
      return;
    }
    if (FindPw !== FindPwConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    // 서버 요청 실행
    const res = await axios.put(`/findpw/changepw/${LoginId}`, {
      password: await hasing(FindPw),
    });
    //비번변경 성공시
    if (res.data.ok) {
      alert("비밀번호가 변경되었습니다. 변경된 비밀번호로 로그인해주세여.");
      navigate("/");
    }
    console.log(res.data);
  };

  const getAuth = async function () {
    const res = await axios.post("/findpw/findpwgetauth", {
      login_id: LoginId,
      phone_number: FindPn,
    });
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
    console.log(res);
  };

  const doAuth = async function () {
    const res = await axios.post("/auth/doauth", {
      login_id: LoginId,
      phone_number: FindPn,
      authentication_number: FindAuth,
    });
    setSend(!isSend);
    setTimeout(() => {
      setSend(isSend);
    }, 3000);

    console.log(res);
  };

  return (
    <section className="login_page">
      <div className="login-container">
        <form>
          {/* <!-- ID input --> */}
          <div className="form-outline">
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={(e) => setLoginId(e.target.value)}
            />

            <label className="form-label" htmlFor="name">
              ID
            </label>
          </div>

          {/* <!-- 핸드폰번호 input  여기에 인증 추가하기--> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="phone_number"
              className="form-control"
              onChange={(e) => setFindPn(e.target.value)}
            />
            <label className="form-label" htmlFor="phone_number">
              핸드폰 번호
            </label>
            {/* <!--인증 --> */}
            <button
              type="button"
              className="btn btn-primary btn-block mb-4"
              onClick={() => {
                getAuth();
              }}
            >
              핸드폰 인증하기
            </button>
            <input
              type="text"
              id="authentication_number"
              className="form-control"
              onChange={(e) => setFindAuth(e.target.value)}
            />
            <label className="form-label" htmlFor="authentication_number">
              인증번호
            </label>
            <button
              type="button"
              className="btn btn-primary btn-block mb-4"
              onClick={() => {
                doAuth();
              }}
            >
              인증번호 제출
            </button>
          </div>

          {/* <!-- 비밀번호 --> */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={(e) => setFindPw(e.target.value)}
            />
            <label className="form-label" htmlFor="password">
              비밀번호
            </label>
          </div>

          {/* <!-- 비밀번호 확인 --> */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="password_confirm"
              className="form-control"
              onChange={(e) => setFindPwConfirm(e.target.value)}
            />
            <label className="form-label" htmlFor="password_confirm">
              비밀번호 확인
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={() => {
              ChangePw();
            }}
          >
            비밀번호 변경
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Not a member? <Link to="/signup">Register</Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Findpw;
