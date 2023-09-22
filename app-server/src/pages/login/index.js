import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signin, signout } from "../../store/loginSlice";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // redux 이용하기
  const [LoginId, setLoginId] = useState("");
  const [LoginPw, setLoginPw] = useState("");

  const signIn = async function () {
    const res = await axios.post("/login/signin", {
      login_id: LoginId,
      password: LoginPw,
    });
    if (res.data.ok) {
      dispatch(signin({ user_id: res.data.user_id }));
      navigate("/");
    }
    console.log(res);
  };
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
              onChange={(e) => setLoginId(e.target.value)}
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
              onChange={(e) => setLoginPw(e.target.value)}
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
              <Link to="/signup">Forgot password?</Link>
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
