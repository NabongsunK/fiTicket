import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BestReviewListItem = (props) => {
  const navigate = useNavigate();
  const { ticket_name, user_name, rating, content, first_image, ticket_id } =
    props.bestReviewListItems;

  // 별표를 동적으로 생성하는 함수
  const renderStars = (rating) => {
    if (rating > 0 && rating < 6) {
      const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
      return <h6 style={{ fontWeight: 200, float: "left" }}>{stars}</h6>;
    }
  };

  return (
    <>
      <div
        className="item"
        onClick={() => {
          navigate("/explore/" + ticket_id);
        }}
      >
        <div className="thumb">
          <img
            src={first_image}
            alt=""
            style={{ width: "221px", height: "311px" }}
          />
          <div className="text">
            {renderStars(rating)}
            <br />
            <br />
            <div className="row">
              <div className="col align-self-start">
                <h4>{ticket_name}</h4>

                <br />
                <div className="col align-self-end">
                  <span
                    style={{
                      float: "right",
                      margin: "5px",
                      color: "#afafaf",
                    }}
                  >
                    <i className="fa fa-users"></i> {user_name.substring(0, 1)}
                    ** 님
                  </span>
                </div>
              </div>
            </div>
            <div className="line-dec" style={{ margin: 0, padding: 0 }}></div>
            <ul
              style={{ marginTop: "4px", paddingTop: "12px", paddingLeft: 0 }}
            >
              <li>리뷰</li>
              <li>
                {" "}
                {content.substring(0, 36)} {content.length > 36 ? "......" : ""}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestReviewListItem;
