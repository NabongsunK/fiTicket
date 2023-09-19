import React from "react";
import { Link } from "react-router-dom";
import GoToMap from "../../components/common/GoToMap";
import Top from "./Top";
import Review from "./Review";
import Recommend from "./Recommend";

function Home() {
  return (
    <>
      <Top />
      <Recommend />
      <Review />
      <GoToMap />
    </>
  );
}

export default Home;
