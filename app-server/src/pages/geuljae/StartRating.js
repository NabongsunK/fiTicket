// import React, { useState, useRef } from "react";
// import { FaStar } from "react-icons/fa";

// function StarRating() {
//   const [ratingValue, setRatingValue] = useState(0);
//   const myRef = useRef(null);

//   const mouseOverHandler = (e) => {
//     const dataValue = e.target.dataset.value;
//     const targetList = e.target.parentNode.childNodes;
//     for (let i = 0; i < dataValue; i++) {
//       targetList[i].style.color = "red";
//     }
//   };

//   const mouseLeaveHandler = (e) => {
//     const targetList = e.target.parentNode.childNodes;
//     for (let i = 0; i < targetList.length; i++) {
//       targetList[i].style.color = "";
//     }
//   };

//   const getRating = (e) => {
//     const dataValue = Number(e.target.dataset.value);
//     const targetList = e.target.parentNode.childNodes;
//     const node = myRef.current;
//     for (let i = 0; i < targetList.length; i++) {
//       if (targetList[i].className.includes("redstar")) {
//         targetList[i].className = "fas fa-star";
//       } else {
//         for (let i = 0; i < dataValue; i++) {
//           targetList[i].className = "fas fa-star redstar";
//         }
//       }
//     }

//     setRatingValue(dataValue);

//     switch (Number(dataValue)) {
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
//       <span
//         className="fas fa-star"
//         data-value="1"
//         onMouseOver={mouseOverHandler}
//         onMouseLeave={mouseLeaveHandler}
//         onClick={getRating}
//       >
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStar />
//       </span>
//       <div ref={myRef}></div>
//     </div>
//   );
// }
// //}
// export default StarRating;

import React, { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";

function StarRating() {
  const [ratingValue, setRatingValue] = useState(0);
  const myRef = useRef(null);

  const mouseOverHandler = (e) => {
    const dataValue = e.target.dataset.value;
    const targetList = e.target.parentNode.childNodes;
    for (let i = 0; i < dataValue; i++) {
      if (targetList[i].nodeType === 1) {
        targetList[i].style.color = "red";
      }
    }
  };

  const mouseLeaveHandler = (e) => {
    const targetList = e.target.parentNode.childNodes;
    for (let i = 0; i < targetList.length; i++) {
      if (targetList[i].nodeType === 1) {
        targetList[i].style.color = "";
      }
    }
  };

  const getRating = (e) => {
    const dataValue = Number(e.target.dataset.value);
    const targetList = e.target.parentNode.childNodes;
    const node = myRef.current;
    for (let i = 0; i < targetList.length; i++) {
      if (targetList[i].nodeType === 1) {
        if (i < dataValue) {
          targetList[i].style.color = "red";
        } else {
          targetList[i].style.color = ""; // 별이 선택되지 않은 경우 색 제거
        }
      }
    }

    setRatingValue(dataValue);

    switch (dataValue) {
      case 1:
        node.style.color = "red";
        node.innerHTML = "<span>1점</span> (별로예요😡)";
        break;
      case 2:
        node.style.color = "red";
        node.innerHTML = "<span>2점</span> (그저그래요🙁)";
        break;
      case 3:
        node.style.color = "red";
        node.innerHTML = "<span>3점</span> (괜찮아요👌)";
        break;
      case 4:
        node.style.color = "red";
        node.innerHTML = "<span>4점</span> (좋아요😄)";
        break;
      case 5:
        node.style.color = "red";
        node.innerHTML = "<span>5점</span> (최고예요👍)";
        break;
      default:
        node.innerHTML = "선택하세요";
        break;
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`fas fa-star ${value <= ratingValue ? "redstar" : ""}`}
          data-value={value}
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={getRating}
        >
          <FaStar />
        </span>
      ))}
      <div ref={myRef}></div>
    </div>
  );
}

export default StarRating;
