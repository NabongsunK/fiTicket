import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import ReviewListItem from "./ReviewListItem";

import Carousel from "react-bootstrap/Carousel";

const items = [
  {
    id: 1,
    ticket_id: 1,
    title: "감악산 꽃&별 여행",
    event_start_date: "20231004",
    event_end_date: "20240121",
    rating: 9,
    name: "김철수",
    content: "아주좋습니다.",
    first_imgae: "path/to/image1.jpg",
  },
  {
    id: 2,
    ticket_id: 1,
    title: "감악산 꽃&별 여행",
    event_start_date: "20231004",
    event_end_date: "20240121",
    rating: 9,
    name: "김철수",
    content: "아주좋습니다.",
    first_imgae: "path/to/image1.jpg",
  },
  {
    id: 3,
    ticket_id: 1,
    title: "감악산 꽃&별 여행",
    event_start_date: "20231004",
    event_end_date: "20240121",
    rating: 9,
    name: "김철수",
    content: "아주좋습니다.",
    first_imgae: "path/to/image1.jpg",
  },
  {
    id: 4,
    ticket_id: 1,
    title: "감악산 꽃&별 여행",
    event_start_date: "20231004",
    event_end_date: "20240121",
    rating: 9,
    name: "김철수",
    content: "아주좋습니다.",
    first_imgae: "path/to/image1.jpg",
  },
  {
    id: 5,
    ticket_id: 1,
    title: "감악산 꽃&별 여행",
    event_start_date: "20231004",
    event_end_date: "20240121",
    rating: 9,
    name: "김철수",
    content: "아주좋습니다.",
    first_imgae: "path/to/image1.jpg",
  },
  {
    id: 6,
    ticket_id: 1,
    title: "감악산 꽃&별 여행",
    event_start_date: "20231004",
    event_end_date: "20240121",
    rating: 9,
    name: "김철수",
    content: "아주좋습니다.",
    first_imgae: "path/to/image1.jpg",
  },
];

function Review() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="card-body" style={{ height: "1000px" }}>
            <h6 className="card-subtitle mb-2 text-muted">{items[0].rating}</h6>
            <h5 className="card-title">{items[0].title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {items[0].event_start_date} ~ {items[0].event_end_date}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">{items[0].name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {items[0].content}
            </h6>
            <p className="card-text">{items[0].path}</p>
          </div>
          <Carousel.Caption>
            <div className="card-body" style={{ backgroundColor: "black" }}>
              <h6 className="card-subtitle mb-2 text-muted">
                {items[0].rating}
              </h6>
              <h5 className="card-title">{items[0].title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {items[0].event_start_date} ~ {items[0].event_end_date}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">{items[0].name}</h6>
              <h6 className="card-subtitle mb-2 text-muted">
                {items[0].content}
              </h6>
              <p className="card-text">{items[0].path}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card-body" style={{ backgroundColor: "yellow" }}>
            <h6 className="card-subtitle mb-2 text-muted">{items[1].rating}</h6>
            <h5 className="card-title">{items[0].title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {items[1].event_start_date} ~ {items[1].event_end_date}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">{items[1].name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {items[1].content}
            </h6>
            <p className="card-text">{items[1].path}</p>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card-body" style={{ backgroundColor: "blue" }}>
            <h6 className="card-subtitle mb-2 text-muted">{items[2].rating}</h6>
            <h5 className="card-title">{items[0].title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {items[2].event_start_date} ~ {items[2].event_end_date}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">{items[2].name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {items[2].content}
            </h6>
            <p className="card-text">{items[2].path}</p>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Review;
