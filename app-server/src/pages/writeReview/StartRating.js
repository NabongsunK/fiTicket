import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

//style-component 사용
const textList = [
  "별로에요😡",
  "그저 그래요🙁",
  "보통이에요👌",
  "좋아요😄",
  "최고예요👍",
];

const ReviewBox = styled.div`
  padding: 30px;
  color: #999;
  font-size: 20px;

  i {
    margin: 20px 10px 20px 0;
    opacity: 0.1;
    cursor: pointer;
    font-size: 50px;
  }

  .yellowStar {
    color: orange;
    opacity: 1;
  }
`;

const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 50px;
`;

const StarContainer = styled.div`
  text-align: center;
  border: none;
  background-color: white;
`;

const HiddenText = styled.p`
  position: absolute;
  top: 50px;
  left: 50%;
  width: 130px;
  height: 30px;
  padding-top: 7px;
  transform: translate(-50%, -50%);
  color: white;
  background-color: #22b3c1;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1;

  ${({ show }) => (show === "true" ? `display:block` : `display: none`)}
`;

function Score(props) {
  const [hovered, setHovered] = useState(5);

  const starText = [1, 2, 3, 4, 5].map((num) => (
    <HiddenText key={num} show={hovered === num ? "true" : "false"}>
      {textList[num - 1]}
    </HiddenText>
  ));

  const starList = [1, 2, 3, 4, 5].map((el) => (
    <i
      className={`fas fa-star ${
        (props.rating >= el) | (hovered >= el) && "yellowStar"
      }`}
      key={el}
      onMouseEnter={() => setHovered(el)}
      onClick={() => props.setRating(el)}
    />
  ));
  return (
    <ReviewBox>
      <ReviewTextBox>
        <p>축제에 대한 평점을 남겨주세요</p>
        {starText}
      </ReviewTextBox>
      <StarContainer>{starList}</StarContainer>
    </ReviewBox>
  );
}

export default Score;
