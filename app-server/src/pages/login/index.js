import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../store/loginSlice";
import hasing from "../../store/hasing";
import PopUp from "../../components/common/PopUp";

axios.defaults.baseURL = "http://localhost:4400/api";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginIdRef = useRef();
  const loginPwRef = useRef();

  const [isActive, setIsActive] = useState(false);
  const [popText, setPopText] = useState("");
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);

  const signIn = useCallback(async () => {
    const loginId = loginIdRef.current.value;
    const loginPw = loginPwRef.current.value;

    if (!loginId.trim() || !loginPw.trim()) {
      setPopText("아이디와 비밀번호를 확인해주세요.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return;
    }

    try {
      const res = await axios.post("/login/signin", {
        login_id: loginId,
        password: await hasing(loginId + loginPw),
      });

      if (res.data.ok) {
        setPopText("loca!T를 즐기세요.");
        setIsActive(true);
        setTimeout(() => {
          setIsActive(false);
        }, 3000);
        dispatch(signin({ user_id: res.data.user_id }));
        navigate("/");
        return;
      } else {
        setPopText("아이디 또는 비밀번호를 다시 확인해주세요.");
        setIsActive(true);
        setTimeout(() => {
          setIsActive(false);
        }, 3000);
      }
    } catch (error) {
      setPopText("잠시후 다시 시도해주세요.");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  }, [dispatch, navigate]);

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
    <section className="login_page">
      <PopUp body={popText} isActive={isActive} />
      <div className="login-container">
        <img src="/assets/images/newLogo.png" className="login-logo" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          {/* <!-- ID input --> */}
          <div className="form-outline">
            <label className="form-label" htmlFor="form2Example1">
              {/* ID */}
            </label>
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              placeholder="아이디"
              ref={loginIdRef}
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline">
            <label className="form-label" htmlFor="form2Example2">
              {/* Password */}
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              placeholder="비밀번호"
              ref={loginPwRef}
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-1 mt-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="text-center">
                <p>
                  비밀번호를 잊으셨나요? <Link to="/findpw">비밀번호 찾기</Link>
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              회원이 아니신가요? <Link to="/signup">회원가입</Link>
            </p>
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

export default Login;
