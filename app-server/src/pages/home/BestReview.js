import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import BestReviewListItem from "./BestReviewListItem";

import axios from "axios";
// axios 기본 url 정의
axios.defaults.baseURL = "http://localhost:4400/api";

const bestReview = async function () {
  const res = await axios.get("/review/best");
  return res.data;
};
var bestReviewList = await bestReview();

const BestReview = function () {
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: false,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      460: {
        items: 2,
      },
      1280: {
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
        <div className="container-fluid" style={{ maxWidth: "1600px" }}>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {bestReviewList.map((bestReviewItem) => (
                  <BestReviewListItem
                    bestReviewListItems={bestReviewItem}
                    key={bestReviewItem.id}
                  />
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestReview;
