import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

// axios 기본 url 정의
axios.defaults.baseURL = 'http://localhost:4400/api/login';


function Signup() {
  const dispatch = useDispatch();
  // redux 이용하기
  const [SignupId,setSignupId] = useState('')
  const [SignupPn,setSignupPn] = useState('')
  const [SignupPw,setSignupPw] = useState('')
  const [SignupRole,setSignupRole] = useState('')
  const [SignupEm,setSignupEm] = useState('')

  const signIn = async function(){
    const res = await axios.post('/signup',{
      "id" : SignupId,
      "phonenumber" : SignupPn,
      "password" : SignupPw,
      "role" : SignupRole,
      "email" : SignupEm,
      "issigned" : false
    });
    console.log(res);
  }
  return (
    // 이쪽 수정부탁
    <div style={{"width": "18rem", "margin":"10rem","backgroundColor":"green"}}>
      <form>
        {/* <!-- ID input --> */}
        <div className="form-outline mb-4">
          <input type="text" id="form2Example1" className="form-control" onChange={e=>setSignupId(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example1">ID</label>
        </div>

        {/* <!-- 핸드폰번호 input  여기에 인증 추가하기--> */}
        <div className="form-outline mb-4">
          <input type="text" id="form2Example2" className="form-control" onChange={e=>setSignupPn(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">핸드폰 번호</label>
        </div>
        
        {/* <!-- 비밀번호 --> */}
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" onChange={e=>setSignupPw(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">비밀번호</label>
        </div>

        {/* <!-- 역할 --> */}
        <div className="form-outline mb-4">
          <input type="text" id="form2Example2" className="form-control" onChange={e=>setSignupRole(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">유저/관리자</label>
        </div>

        {/* <!-- 이메일주소 --> */}
        <div className="form-outline mb-4">
          <input type="text" id="form2Example2" className="form-control" onChange={e=>setSignupEm(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">이메일주소</label>
        </div>

       

        {/* <!-- Submit button --> */}
        <button type="button" 
                className="btn btn-primary btn-block mb-4"
                onClick={()=>{signIn()}}>
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
  );
}

export default Signup;