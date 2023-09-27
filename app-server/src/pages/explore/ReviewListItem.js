import React from "react";

const ReviewListItem = (props) => {
  // console.log(props);
  const { ticket_name, user_name, rating, content, first_image } =
    props.bestReviewListItems;
  // console.log("BestReviewListItem: " + props.bestReviewListItems);

  // 별표를 동적으로 생성하는 함수
  const renderStars = (rating) => {
    if (rating > 0 && rating < 6) {
      const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
      return <h6 style={{ fontWeight: 200, float: "left" }}>{stars}</h6>;
    }
  };

  return (
    <>
      <div className="item">
        <div className="thumb">
          <div className="text">
            {renderStars(rating)}
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

export default ReviewListItem;
