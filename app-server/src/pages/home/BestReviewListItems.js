import React from "react";

const BestReviewListItems = (props) => {
  // console.log(props);
  const { ticket_name, user_name, rating, content, first_image } =
    props.bestReviewListItems;
  // console.log("BestReviewListItem: " + props.bestReviewListItems);

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
              {ticket_name}
              <br />
              <span style={{ float: "right", margin: "5px" }}>
                <i className="fa fa-users"></i> {user_name.substring(0, 1)}** 님
              </span>
            </h4>
            <div className="line-dec" style={{ margin: 0, padding: 0 }}></div>
            <ul style={{ marginTop: "4px", paddingTop: "12px" }}>
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
