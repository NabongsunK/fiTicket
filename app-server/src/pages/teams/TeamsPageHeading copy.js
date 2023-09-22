import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useState } from "react";
import TestiMonialsDetails from "./TestiMonialDetails";

// import userPic from "../../../public/assets/images/best-02.jpg";

const TeamsPageHeading2 = function () {
  const [isActive, setActive] = useState("false");
  const alertHandler = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
  };

  const testiMonials = [
    {
      id: 1,
      ticket_id: 1,
      title: "감악산 꽃&별 여행",
      event_start_date: "20231004",
      event_end_date: "20240121",
      rating: 9,
      name: "김철수",
      content: "아주좋습니다.",
      first_imgae:
        "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
    },
    {
      id: 2,
      ticket_id: 1,
      title: "비봉산 꽃&별 여행",
      event_start_date: "20231004",
      event_end_date: "20240121",
      rating: 9,
      name: "김길수",
      content: "아주좋습니다.",
      first_imgae:
        "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
    },
    {
      id: 3,
      ticket_id: 1,
      title: "별 여행",
      event_start_date: "20231004",
      event_end_date: "20240121",
      rating: 9,
      name: "외계인",
      content: "아주좋습니다.",
      first_imgae:
        "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
    },
    {
      id: 4,
      ticket_id: 1,
      title: "땡벌",
      event_start_date: "20231004",
      event_end_date: "20240121",
      rating: 9,
      name: "지쳤어요",
      content: "아주좋습니다.",
      first_imgae:
        "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
    },
    {
      id: 5,
      ticket_id: 1,
      title: "볓,별,눈물",
      event_start_date: "20231004",
      event_end_date: "20240121",
      rating: 9,
      name: "마지막춤을",
      content: "아주좋습니다.",
      first_imgae:
        "http://tong.visitkorea.or.kr/cms/resource/01/2859201_image2_1.jpg",
    },
    {
      id: 6,
      ticket_id: 1,
      title: "전부땅아아아아",
      event_start_date: "20231004",
      event_end_date: "20240121",
      rating: 9,
      name: "아아아아아아",
      content: "아주좋습니다.",
      first_imgae:
        "http://tong.visitkorea.or.kr/cms/resource/24/2804924_image2_1.jpg",
    },
  ];

  //Owl Carousel Settings
  const options = {
    loop: true,
    center: false,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="weekly-offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>Best review</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-header">
            <h5>Data-delay</h5>
          </div>
          <div className="card-body">
            <div className="bg-light p-4 mb-2" style={{ height: "250px" }}>
              <div
                className={
                  isActive
                    ? "toast toast-3s fade hide"
                    : "toast toast-3s fade show"
                }
                role="alert"
                aria-live="assertive"
                data-delay="3000"
                aria-atomic="true"
              >
                <div
                  className="toast-header"
                  style={{ backgroundColor: "#22b3c1" }}
                >
                  <img
                    src="assets/images/logo2.png"
                    alt=""
                    className="img-fluid m-r-5"
                    style={{ width: "150px" }}
                  />
                  <strong className="mr-auto"></strong>
                  <small className="text-muted"></small>
                </div>
                <div className="toast-body">
                  <strong className="mr-auto">
                    티켓이 장바구니에 담겼습니다.
                  </strong>
                </div>
              </div>
            </div>

            <button className="btn  btn-primary" onClick={alertHandler}>
              3 sec
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamsPageHeading2;
