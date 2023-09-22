import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import axios from "axios";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

// const items = [
//   {
//     id: 1,
//     ticket_id: 1,
//     title: "감악산 꽃&별 여행",
//     event_start_date: "20231004",
//     event_end_date: "20240121",
//     rating: 9,
//     name: "김철수",
//     content: "아주좋습니다.",
//     first_imgae:
//       "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
//   },
//   {
//     id: 2,
//     ticket_id: 1,
//     title: "비봉산 꽃&별 여행",
//     event_start_date: "20231004",
//     event_end_date: "20240121",
//     rating: 9,
//     name: "김길수",
//     content: "아주좋습니다.",
//     first_imgae:
//       "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
//   },
//   {
//     id: 3,
//     ticket_id: 1,
//     title: "별 여행",
//     event_start_date: "20231004",
//     event_end_date: "20240121",
//     rating: 9,
//     name: "외계인",
//     content: "아주좋습니다.",
//     first_imgae:
//       "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
//   },
//   {
//     id: 4,
//     ticket_id: 1,
//     title: "땡벌",
//     event_start_date: "20231004",
//     event_end_date: "20240121",
//     rating: 9,
//     name: "지쳤어요",
//     content: "아주좋습니다.",
//     first_imgae:
//       "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
//   },
//   {
//     id: 5,
//     ticket_id: 1,
//     title: "볓,별,눈물",
//     event_start_date: "20231004",
//     event_end_date: "20240121",
//     rating: 9,
//     name: "마지막춤을",
//     content: "아주좋습니다.",
//     first_imgae:
//       "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
//   },
//   {
//     id: 6,
//     ticket_id: 1,
//     title: "전부땅아아아아",
//     event_start_date: "20231004",
//     event_end_date: "20240121",
//     rating: 9,
//     name: "아아아아아아",
//     content: "아주좋습니다.",
//     first_imgae:
//       "http://tong.visitkorea.or.kr/cms/resource/24/2804924_image2_1.jpg",
//   },
// ];

const bestReview = async function () {
  const res = await axios.get("/review/best");
  return res.data;
};

var items = await bestReview();

function Review() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  console.log(items);

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <div className="row">
        <div className="cities-town">
          <div className="container">
            <div
              className="slider-content"
              style={{
                padding: "10px",
                width: "50%",
                left: "25%",
                backgroundColor: "#22b3c1",
              }}
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-5 align-middle">
                  <h2 style={{ margin: "0", color: "#fff" }}>
                    <em style={{ color: "#fff" }}>베스트 리뷰</em>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          nextIcon={null}
          prevIcon={null}
        >
          {groupedItems.map((group, idx) => (
            <Carousel.Item key={idx}>
              <div className="row justify-content-center">
                {group.map((item) => (
                  <div
                    className="col-md-3 card-body"
                    key={item.id}
                    style={{
                      margin: "10px",
                      position: "relative",
                      width: "100%",
                      height: "300px",
                      overflow: "visible",
                    }}
                  >
                    <img
                      src={item.first_image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "23px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        padding: "10px",
                        borderRadius: "5px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.rating}점
                      </h6>
                      <h5 className="card-title">{item.ticket_name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.event_start_date} ~ {item.event_end_date}
                      </h6>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.user_name.substring(0, 1)}**님
                      </h6>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.content.substring(0, 32)}{" "}
                        {item.content.length > 32 ? "..." : ""}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Review;
