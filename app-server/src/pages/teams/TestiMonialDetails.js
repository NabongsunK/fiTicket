import React from "react";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { title, name, rating, content, first_imgae } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <>
      <div className="item">
        <div className="thumb">
          <img
            src={first_imgae}
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

export default TestiMonialsDetails;
