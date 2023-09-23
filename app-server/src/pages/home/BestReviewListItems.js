import React from "react";

const BestReviewListItems = (props) => {
  const { title, name, rating, content, first_image } =
    props.bestReviewListItems;

  return (
    <>
      <div className="item">
        <div className="thumb">
          <img
            src={first_image}
            alt=""
            style={{ width: "221px", height: "311px" }}
          />
          <div className="text">
            <h6 style={{ float: "left" }}>★★★★★</h6>
            <br />
            <br />
            <h4>
              {title}
              <br />
              <span>
                <i className="fa fa-users"></i> {name.substring(0, 1)}** 님
              </span>
            </h4>
            <div className="line-dec"></div>
            <ul>
              <li>리뷰</li>
              <li>{content}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestReviewListItems;
