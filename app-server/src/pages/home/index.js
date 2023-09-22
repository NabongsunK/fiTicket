import React from "react";
import { Link } from "react-router-dom";
import GoToMap from "../../components/common/GoToMap";
import Top from "./Top";
import Review from "./Review";
import Recommend from "./Recommend";
import festivalsData from "../../data/_festivals.json";

function Home() {
  return (
    <>
      <Top />
      <Recommend festivals={festivalsData} />
      <Review />
      <GoToMap />
    </>
  );
}

export default Home;
