// import React, { useState, useRef } from "react";
// import { FaStar } from "react-icons/fa";

// function StarRating() {
//   const [ratingValue, setRatingValue] = useState(0);
//   const myRef = useRef(null);

//   const mouseOverHandler = (e) => {
//     const dataValue = e.target.dataset.value;
//     const targetList = e.target.parentNode.childNodes;
//     for (let i = 0; i < dataValue; i++) {
//       if (targetList[i].nodeType === 1) {
//         targetList[i].style.color = "red";
//       }
//     }
//   };

//   const mouseLeaveHandler = (e) => {
//     const targetList = e.target.parentNode.childNodes;
//     for (let i = 0; i < targetList.length; i++) {
//       if (targetList[i].nodeType === 1) {
//         targetList[i].style.color = "";
//       }
//     }
//   };

//   const getRating = (e) => {
//     const dataValue = Number(e.target.dataset.value);
//     const targetList = e.target.parentNode.childNodes;
//     const node = myRef.current;
//     for (let i = 0; i < targetList.length; i++) {
//       if (targetList[i].nodeType === 1) {
//         if (i < dataValue) {
//           targetList[i].style.color = "red";
//         } else {
//           targetList[i].style.color = ""; // 별이 선택되지 않은 경우 색 제거
//         }
//       }
//     }

//     setRatingValue(dataValue);

//     switch (dataValue) {
//       case 1:
//         node.style.color = "red";
//         node.innerHTML = "<span>1점</span> (별로예요😡)";
//         break;
//       case 2:
//         node.style.color = "red";
//         node.innerHTML = "<span>2점</span> (그저그래요🙁)";
//         break;
//       case 3:
//         node.style.color = "red";
//         node.innerHTML = "<span>3점</span> (괜찮아요👌)";
//         break;
//       case 4:
//         node.style.color = "red";
//         node.innerHTML = "<span>4점</span> (좋아요😄)";
//         break;
//       case 5:
//         node.style.color = "red";
//         node.innerHTML = "<span>5점</span> (최고예요👍)";
//         break;
//       default:
//         node.innerHTML = "선택하세요";
//         break;
//     }
//   };

//   return (
//     <div>
//       {[1, 2, 3, 4, 5].map((value) => (
//         <span
//           key={value}
//           className={`fas fa-star ${value <= ratingValue ? "redstar" : ""}`}
//           data-value={value}
//           onMouseOver={mouseOverHandler}
//           onMouseLeave={mouseLeaveHandler}
//           onClick={getRating}
//         >
//           <FaStar />
//         </span>
//       ))}
//       <div ref={myRef}></div>
//     </div>
//   );
// }

// export default StarRating;

// --------

import React, { useState } from "react";
import styled from "styled-components";

//style-component 사용
const textList = [
  "별로에요",
  "그저 그래요",
  "보통이에요",
  "좋아요",
  "최고예요",
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
  background-color: #1f8ce6;
  border-radius: 4px;
  font-size: 16px;

  ${({ show }) => (show ? `display:block` : `display: none`)}
`;

function Score() {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  const goToFetch = (e) => {
    setClicked(e.target.id);
    fetch(`http://10.58.3.24:8000/products/1`, {
      //사용할 http 메소드
      method: "POST",
      //토큰
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.loTjeBWZ9SeXV-BcIxqOtX37AN30ROvsZl0_udeeRJU",
      },
      //서버에 보낼 데이터 (별점)
      body: JSON.stringify({
        rating: e.target.id,
      }),
    });
  };
  return (
    <ReviewBox>
      <ReviewTextBox>
        <p>이 책을 평가해주세요!</p>
        {[1, 2, 3, 4, 5].map((num) => (
          <HiddenText key={num} show={hovered === num}>
            {textList[num - 1]}
          </HiddenText>
        ))}
      </ReviewTextBox>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((el) => (
          <i
            className={`fas fa-star ${
              (clicked >= el) | (hovered >= el) && "yellowStar"
            }`}
            key={el}
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setClicked(el)}
          />
        ))}
      </StarContainer>
    </ReviewBox>
  );
}

export default Score;
