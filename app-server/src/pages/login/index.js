import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/loginSlice";
import hasing from "../../store/hasing";

axios.defaults.baseURL = "http://localhost:4400/api";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginIdRef = useRef();
  const loginPwRef = useRef();

  const signIn = useCallback(async () => {
    const loginId = loginIdRef.current.value;
    const loginPw = loginPwRef.current.value;

    if (!loginId.trim() && !loginPw.trim()) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    if (!loginId.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (!loginPw.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const res = await axios.post("/login/signin", {
        login_id: loginId,
        password: await hasing(loginPw),
      });

      if (res.data.ok) {
        dispatch(signin({ user_id: res.data.user_id }));
        navigate("/");
      } else {
        alert("아이디 또는 비밀번호를 다시 확인해주세요.");
      }
    } catch (error) {
      console.error(error);
      alert("잠시후 다시 시도해주세요.");
    }
  }, [dispatch, navigate]);

  return (
    <section className="login_page">
      <div className="login-container">
        <form>
          {/* <!-- ID input --> */}
          <div className="form-outline">
            <label className="form-label" htmlFor="form2Example1">
              ID
            </label>
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              ref={loginIdRef}
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              ref={loginPwRef}
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              {/* <!-- Simple link --> */}
              <Link to="/findpw">Forgot password?</Link>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={() => {
              signIn();
            }}
          >
            Sign in
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

export default Login;
