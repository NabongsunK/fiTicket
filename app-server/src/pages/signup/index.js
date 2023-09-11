import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

// axios 기본 url 정의
axios.defaults.baseURL = 'http://localhost:4400/api';


function Signup() {
  const dispatch = useDispatch();
  // redux 이용하기
  const [SignupId,setSignupId] = useState('')
  const [SignupPn,setSignupPn] = useState('')
  const [SignupPw,setSignupPw] = useState('')
  const [SignupRole,setSignupRole] = useState('')
  const [SignupEm,setSignupEm] = useState('')
  const [SignupAuth,setSignupAuth] = useState('')

  const signUp = async function(){
    const res = await axios.post('/login/signup',{
      "id" : SignupId,
      "phonenumber" : SignupPn,
      "password" : SignupPw,
      "role" : SignupRole,
      "email" : SignupEm,
      "issigned" : false
    });
    console.log(res);
  }
  const getAuth = async function(){
    const res = await axios.post('/auth/getauthnum',{
      "id" : SignupId,
      "phonenumber" : SignupPn
    });
    console.log(res);
  }
  // 여기 인증번호 한아이디에 한개씩이 안됨 확인해야됨
  // 아마 회원가입한사람만(userdb에 아이디가 저장된 사람만) 인증번호 받기로 했던거 같은데 이거 수정해야됨
  const doAuth = async function(){
    const res = await axios.post('/auth/doauth',{
      "id" : SignupId,
      "phonenumber" : SignupPn,
      "auth": SignupAuth
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
            {/* <!--인증 --> */}
          <button type="button" 
                  className="btn btn-primary btn-block mb-4"
                  onClick={()=>{getAuth()}}>
            핸드폰 인증하기
          </button>
          <input type="text" id="form2Example2" className="form-control" onChange={e=>setSignupAuth(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">인증번호</label>
          <button type="button" 
                  className="btn btn-primary btn-block mb-4"
                  onClick={()=>{doAuth()}}>
            인증번호 제출
          </button>
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
                onClick={()=>{signUp()}}>
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