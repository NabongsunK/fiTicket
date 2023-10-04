import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GoToMap from "../../components/common/GoToMap";
import Top from "./Top";
import BestReview from "./BestReview";
import Recommend from "./Recommend";
import festivalsData from "../../data/_festivals.json";
import Login from "../login/login";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return <Login />; // 로그인되지 않은 경우 Login 컴포넌트를 렌더링합니다.
  }

  return (
    <>
      <Top />
      <Recommend festivals={festivalsData} />
      <BestReview />
      <GoToMap />
    </>
  );
}

export default Home;
