import React from "react";
import { Link } from "react-router-dom";
import GoToMap from "../../components/common/GoToMap";
import Top from "./Top";
import Review from "./Review";
import Recommend from "./Recommend";

const sliderItems = [
  { id: 1, imgSrc: "path/to/image1.jpg", description: "1번" },
  { id: 2, imgSrc: "path/to/image2.jpg", description: " 2번임" },
  { id: 3, imgSrc: "path/to/image3.jpg", description: "3333333ㅋㅋ 3" },
  { id: 4, imgSrc: "path/to/image4.jpg", description: "4ㅋ4ㅋ4ㅋ4ㅋ123 4" },
  { id: 5, imgSrc: "path/to/image5.jpg", description: "이55이이이5" },
  { id: 6, imgSrc: "path/to/image6.jpg", description: "이육육ㅁ닝 6" },
];

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
