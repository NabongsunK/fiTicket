import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, signout } from "../../store/loginSlice";
import hasing from "../../store/hasing";

// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // redux 이용하기
  const [SignupId, setSignupId] = useState("");
  const [SignupPn, setSignupPn] = useState("");
  const [SignupPw, setSignupPw] = useState("");
  const [SignupRole, setSignupRole] = useState("");
  const [SignupEm, setSignupEm] = useState("");
  const [SignupAuth, setSignupAuth] = useState("");
  const [SignupName, setSignupName] = useState("");

  const signUp = async function () {
    const res = await axios.post("/login/signup", {
      login_id: SignupId,
      phone_number: SignupPn,
      password: await hasing(SignupPw),
      role: SignupRole,
      email: SignupEm,
      name: SignupName,
    });
    // 회원가입성공시 성공시
    if (res.data.ok) {
      dispatch(signin({ user_id: res.data.user_id }));
      navigate("/");
    }
    console.log(res);
  };
  const getAuth = async function () {
    const res = await axios.post("/auth/getauthnum", {
      login_id: SignupId,
      phone_number: SignupPn,
    });
    console.log(res);
  };
  // 여기 인증번호 한아이디에 한개씩이 안됨 확인해야됨
  // 아마 회원가입한사람만(userdb에 아이디가 저장된 사람만) 인증번호 받기로 했던거 같은데 이거 수정해야됨
  const doAuth = async function () {
    const res = await axios.post("/auth/doauth", {
      login_id: SignupId,
      phone_number: SignupPn,
      authentication_number: SignupAuth,
    });
    console.log(res);
  };
  return (
    // 이쪽 수정부탁
    <section className="signup_page">
      <div className="signup-container">
        <form>
          {/* <!-- ID input --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="login_id"
              className="form-control"
              onChange={(e) => setSignupId(e.target.value)}
            />
            <label className="form-label" htmlFor="login_id">
              ID
            </label>
          </div>

          {/* <!-- 핸드폰번호 input  여기에 인증 추가하기--> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="phone_number"
              className="form-control"
              onChange={(e) => setSignupPn(e.target.value)}
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
              onChange={(e) => setSignupAuth(e.target.value)}
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
              onChange={(e) => setSignupPw(e.target.value)}
            />
            <label className="form-label" htmlFor="password">
              비밀번호
            </label>
          </div>

          {/* <!-- 이름 --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={(e) => setSignupName(e.target.value)}
            />
            <label className="form-label" htmlFor="name">
              이름
            </label>
          </div>

          {/* <!-- 역할 --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="role"
              className="form-control"
              onChange={(e) => setSignupRole(e.target.value)}
            />
            <label className="form-label" htmlFor="role">
              유저/관리자
            </label>
          </div>

          {/* <!-- 이메일주소 --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="email"
              className="form-control"
              onChange={(e) => setSignupEm(e.target.value)}
            />
            <label className="form-label" htmlFor="email">
              이메일주소
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={() => {
              signUp();
            }}
          >
            회원가입
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
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

export default Signup;
