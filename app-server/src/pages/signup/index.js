import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signin, signout } from "../../store/loginSlice";
import hasing from "../../store/hasing";
import styles from "./signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idRef = useRef();
  const pnRef = useRef();
  const pwRef = useRef();
  const pwConfirmRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const authRef = useRef();

  const [isActive, setActive] = useState(false);
  const [isSend, setSend] = useState(false);

  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^010-?\d{4}-?\d{4}$/;
    return regex.test(phoneNumber);
  };

  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
    return regex.test(password);
  };

  const isValidName = (name) => {
    const regex = /^[가-힣]+$/;
    return regex.test(name);
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const isValidId = (id) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(id);
  };

  //유효성 검사 함수들

  const signUp = async function () {
    if (!isValidName(nameRef.current.value)) {
      alert("이름은 한글만 가능합니다.");
      return;
    }

    if (!isValidPassword(pwRef.current.value)) {
      alert("비밀번호는 8자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.");
      return;
    }

    if (!isValidEmail(emailRef.current.value)) {
      alert("유효한 이메일 형식이 아닙니다.");
      return;
    }

    if (!isValidId(idRef.current.value)) {
      alert("ID는 영어와 숫자만 가능합니다.");
      return;
    }

    if (pwRef.current.value !== pwConfirmRef.current.value) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    if (!pnRef.current.value) {
      alert("핸드폰 번호를 입력해주세요.");
      return;
    }

    // 서버 요청 실행
    // 서버에서 user로 자동변환
    const res = await axios.post("/login/signup", {
      login_id: idRef.current.value,
      phone_number: pnRef.current.value,
      password: await hasing(pwRef.current.value),
      role: "user",
      email: emailRef.current.value,
      name: nameRef.current.value,
    });
    // 회원가입성공시 성공시
    if (res.data.ok) {
      // dispatch(signin({ user_id: res.data.user_id }));
      navigate("/");
    }
    console.log(res);
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    signUp();
  };

  const getAuth = async function () {
    if (!isValidPhoneNumber(pnRef.current.value)) {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 5000);

      alert(
        "핸드폰 번호는 010으로 시작하며, 중간,끝에는 4자리 숫자만 가능합니다."
      );
      return;
    }

    const res = await axios.post("/auth/getauthnum", {
      login_id: idRef.current.value,
      phone_number: pnRef.current.value,
    });
    setSend(true);
    setTimeout(() => {
      setSend(false);
    }, 5000);
    console.log(res);
  };
  // 여기 인증번호 한아이디에 한개씩이 안됨 확인해야됨
  // 아마 회원가입한사람만(userdb에 아이디가 저장된 사람만) 인증번호 받기로 했던거 같은데 이거 수정해야됨
  const doAuth = async function () {
    const res = await axios.post("/auth/doauth", {
      login_id: idRef.current.value,
      phone_number: pnRef.current.value,
      authentication_number: authRef.current.value,
    });
    setSend(true);
    setTimeout(() => {
      setSend(false);
    }, 3000);
    console.log(res);
  };

  return (
    // 이쪽 수정부탁
    <section className="signup_page">
      {/* 핸드폰 인증하기 팝업 */}
      <div
        className={
          isActive
            ? `toast toast-3s fade show ${styles.toastPosition}`
            : `toast toast-3s fade hide ${styles.toastPosition}`
        }
        role="alert"
        aria-live="assertive"
        data-delay="2000"
        aria-atomic="true"
      >
        <div className={`toast-header ${styles.toastHeaderColor}`}>
          <img
            src="assets/images/logo2.png"
            alt=""
            className={`img-fluid m-r-5 ${styles.logoStyle}`}
          />
          <strong className="mr-auto"></strong>
          <small className="text-muted"></small>
        </div>
        <div className="toast-body">
          <strong className="mr-auto">전송받은 인증번호를 입력해주세요.</strong>
        </div>
      </div>

      {/* 인증번호 제출 */}
      <div
        className={
          isSend
            ? `toast toast-3s fade show ${styles.toastPosition}`
            : `toast toast-3s fade hide ${styles.toastPosition}`
        }
        role="alert"
        aria-live="assertive"
        data-delay="2000"
        aria-atomic="true"
      >
        <div className={`toast-header ${styles.toastHeaderColor}`}>
          <img
            src="assets/images/logo2.png"
            alt=""
            className={`img-fluid m-r-5 ${styles.logoStyle}`}
          />
          <strong className="mr-auto"></strong>
          <small className="text-muted"></small>
        </div>
        <div className="toast-body">
          <strong className="mr-auto">아래 회원가입을 진행해주세요.</strong>
        </div>
      </div>

      <div className="signup-container">
        <form className="signup-form" onSubmit={FormSubmit}>
          {/* <!-- ID input --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="login_id"
              className="form-control"
              ref={idRef}
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
              ref={pnRef}
            />
            <label className="form-label" htmlFor="phone_number">
              핸드폰 번호
            </label>
            {/* <!--인증 --> */}
            <button
              type="button"
              className="btn btn-primary btn-block mb-4"
              onClick={getAuth}
            >
              핸드폰 인증하기
            </button>
            <input
              type="text"
              id="authentication_number"
              className="form-control"
              ref={authRef}
            />
            <label className="form-label" htmlFor="authentication_number">
              인증번호
            </label>
            <button
              type="button"
              className="btn btn-primary btn-block mb-4"
              onClick={doAuth}
            >
              인증번호 제출
            </button>
          </div>

          {/* <!-- 이름 --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="name"
              className="form-control"
              ref={nameRef}
            />
            <label className="form-label" htmlFor="name">
              이름
            </label>
          </div>

          {/* <!-- 비밀번호 --> */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="password"
              className="form-control"
              ref={pwRef}
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
              ref={pwConfirmRef}
            />
            <label className="form-label" htmlFor="password_confirm">
              비밀번호 확인
            </label>
          </div>

          {/* <!-- 이메일주소 --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="email"
              className="form-control"
              ref={emailRef}
            />
            <label className="form-label" htmlFor="email">
              이메일주소
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
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
