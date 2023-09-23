import React from "react";
import { useState } from "react";
import StarRating from "./StartRating";
// import { Link } from "react-router-dom";

const WriteReview = () => {
  const [comment, setComment] = useState("");
  const [feedComments, setFeedComments] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const post = (e) => {
    const copyFeedComents = [...feedComments];
    copyFeedComents.push(comment);
    setFeedComments(copyFeedComents);
    setComment("");
  };
  //const userName = "UserName"; // 사용자 이름을 설정하십시오.

  return (
    <>
      <div
        className="container"
        style={{ padding: "0 200px", marginTop: "50px" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <h4
                className="mb-4 col-9"
                style={{
                  color: "#22b3c1",
                  paddingTop: "50px",
                }}
              >
                리뷰 작성
              </h4>
              <StarRating />
            </div>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="이름"
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="이메일"
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="회원ID"
                  />
                </div>
                <div className="col-12 col-sm-6"></div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="리뷰 내용"
                    type="text"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    onKeyUp={(e) => {
                      e.target.value.length > 0
                        ? setIsValid(true)
                        : setIsValid(false);
                    }}
                    value={comment}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className={
                    comment.length > 0
                      ? "submitCommentActive"
                      : "submitCommentInactive"
                  }
                  onClick={post}
                  disabled={!isValid}
                  style={{ width: "100px" }}
                >
                  등록하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <p className="userName">{userName}</p> */}
      {/* <div className="userComment">{userComment}</div> */}
    </>
  );
};

export default WriteReview;
