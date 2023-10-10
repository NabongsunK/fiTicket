import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signin, signout } from "../../store/loginSlice";
import hasing from "../../store/hasing";
import PopUp from "../../components/common/PopUp";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  const idRef = useRef();
  const pnRef = useRef();
  const pwRef = useRef();
  const pwConfirmRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const authRef = useRef();

  const [isActive, setIsActive] = useState(false);
  const [popText, setPopText] = useState("");

  const [blockPhone, setBlockPhone] = useState(false);
  const [blockAuth, setBlockAuth] = useState(false);

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

  const signUp = async function () {
    if (!pnRef.current.value) {
      setPopText("핸드폰 번호를 입력해주세요.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    if (!isValidName(nameRef.current.value)) {
      setPopText("이름은 한글만 가능합니다.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    if (!isValidPassword(pwRef.current.value)) {
      setPopText(
        "비밀번호는 8자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
      );
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    if (!isValidEmail(emailRef.current.value)) {
      setPopText("유효한 이메일 형식이 아닙니다.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    if (!isValidId(idRef.current.value)) {
      setPopText("ID는 영어와 숫자만 가능합니다.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    if (pwRef.current.value !== pwConfirmRef.current.value) {
      setPopText("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    // 서버 요청 실행
    // 서버에서 user로 자동변환
    const res = await axios.post("/login/signup", {
      login_id: idRef.current.value,
      phone_number: pnRef.current.value,
      password: await hasing(idRef.current.value + pwRef.current.value),
      email: emailRef.current.value,
      name: nameRef.current.value,
    });
    // 회원가입성공시 성공시
    if (res.data.ok) {
      setPopText(
        "회원가입 완료되었습니다. 서비스를 이용하려면 로그인 해주세요."
      );
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  const getAuth = async function () {
    if (!isValidId(idRef.current.value)) {
      setPopText("ID는 영어와 숫자만 가능합니다.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    if (!isValidPhoneNumber(pnRef.current.value)) {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);

      setPopText(
        "핸드폰 번호는 010으로 시작하며, 중간,끝에는 4자리 숫자만 가능합니다."
      );
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    const res = await axios.post("/auth/getauthnum", {
      login_id: idRef.current.value,
      phone_number: pnRef.current.value,
    });

    if (res.data.ok) {
      setPopText("사용가능한 아이디입니다. 인증번호를 입력해 주세요.");
      setIsActive(true);
      setBlockPhone(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    } else {
      setPopText("중복된 아이디입니다. 다시 입력해 주세요.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  };
  // 여기 인증번호 한아이디에 한개씩이 안됨 확인해야됨
  // 아마 회원가입한사람만(userdb에 아이디가 저장된 사람만) 인증번호 받기로 했던거 같은데 이거 수정해야됨
  const doAuth = async function () {
    const res = await axios.post("/auth/doauth", {
      login_id: idRef.current.value,
      phone_number: pnRef.current.value,
      authentication_number: authRef.current.value,
    });

    if (res.data.ok) {
      setPopText("인증이 완료되었습니다. 아래정보를 기입해 주세요.");
      setIsActive(true);
      setBlockAuth(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    } else {
      setPopText(
        "인증번호가 잘못되었습니다. 대.소문자를 확인하고 다시 입력해 주세요"
      );
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  };

  const ingToggle = function () {
    setPopText("서비스 준비예정입니다.");
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };
  if (is_signed) {
    navigate("/");
  }

  return (
    // 이쪽 수정부탁
    <section className="login_page">
      {/* 핸드폰 팝업 */}
      <PopUp body={popText} isActive={isActive} />

      <div className="login-container">
        <img src="/assets/images/newLogo.png" className="login-logo" />
        <form className="login-form">
          {/* <!-- ID input --> */}
          <div className="form-outline mb-0">
            <input
              type="text"
              id="login_id"
              className="form-control"
              ref={idRef}
              readOnly={blockPhone}
              placeholder="아이디"
            />
            <label className="form-label" htmlFor="login_id"></label>
          </div>

          {/* <!-- 핸드폰번호 input  여기에 인증 추가하기--> */}
          <div className="form-outline mb-0">
            <input
              type="text"
              id="phone_number"
              className="form-control"
              ref={pnRef}
              readOnly={blockPhone}
              placeholder="핸드폰 번호"
              style={{ marginBottom: "15px" }}
            />
            <label className="form-label" htmlFor="phone_number"></label>
            {/* <!--인증 --> */}
            <button
              type="button"
              className="btn btn-primary btn-block mb-3"
              onClick={getAuth}
              disabled={blockPhone}
            >
              핸드폰 인증하기
            </button>
            <input
              type="text"
              id="authentication_number"
              className="form-control"
              ref={authRef}
              readOnly={blockAuth}
              placeholder="인증번호"
              style={{ marginBottom: "15px" }}
            />
            <label
              className="form-label"
              htmlFor="authentication_number"
            ></label>
            <button
              type="button"
              className="btn btn-primary btn-block mb-3"
              onClick={doAuth}
              disabled={blockAuth}
            >
              인증번호 제출
            </button>
          </div>

          {/* <!-- 이름 --> */}
          <div className="form-outline mb-0">
            <input
              type="text"
              id="name"
              className="form-control"
              ref={nameRef}
              placeholder="이름"
            />
            <label className="form-label" htmlFor="name"></label>
          </div>

          {/* <!-- 비밀번호 --> */}
          <div className="form-outline mb-0">
            <input
              type="password"
              id="password"
              className="form-control"
              ref={pwRef}
              placeholder="비밀번호"
            />
            <label className="form-label" htmlFor="password"></label>
          </div>

          {/* <!-- 비밀번호 확인 --> */}
          <div className="form-outline mb-0">
            <input
              type="password"
              id="password_confirm"
              className="form-control"
              ref={pwConfirmRef}
              placeholder="비밀번호 확인"
            />
            <label className="form-label" htmlFor="password_confirm"></label>
          </div>

          {/* <!-- 이메일주소 --> */}
          <div className="form-outline mb-0">
            <input
              type="text"
              id="email"
              className="form-control"
              ref={emailRef}
              placeholder="이메일"
            />
            <label className="form-label" htmlFor="email"></label>
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="button"
            onClick={signUp}
            className="btn btn-primary btn-block mb-0"
            disabled={!blockAuth}
          >
            회원가입
          </button>

          <div className="text-center">
            <p>or sign up with:</p>
            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
              onClick={ingToggle}
            >
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
              onClick={ingToggle}
            >
              <i className="fab fa-google"></i>
            </button>

            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
              onClick={ingToggle}
            >
              <i className="fab fa-twitter"></i>
            </button>

            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
              onClick={ingToggle}
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
