import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import ReviewListItem from "./ReviewListItem";

const ReviewList = function (props) {
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: false,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  const reviewList = props.reviewData.map((bestReviewItem) => (
    <ReviewListItem
      bestReviewListItems={bestReviewItem}
      key={bestReviewItem.id}
    />
  ));
  return (
    <>
      <div className="weekly-offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>review</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {reviewList}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewList;
