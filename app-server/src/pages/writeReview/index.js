import React, { useEffect } from "react";
import { useState } from "react";
import StarRating from "./StartRating";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
// import { Link } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:4400/api";

const submit = async function (article) {
  const res = await axios.post("/review/write", article);
  return res.data.data;
};

const WriteReview = function () {
  const [comment, setComment] = useState("");
  const [isValid, setIsValid] = useState(false);
  const is_signed = useSelector((state) => state.myLoginSlice.is_signed);
  const user_id = useSelector((state) => state.myLoginSlice.user_id);
  const [rating, setRating] = useState(5);
  const { id } = useParams();

  const navigate = useNavigate();
  const post = function () {
    const article = {
      rating,
      ticket_id: id,
      user_id,
      content: comment,
    };
    submit(article);
    navigate("/");
  };

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
              <StarRating setRating={setRating} rating={rating} />
            </div>
            <form>
              <div className="row g-3">
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
                      e.target.value ? setIsValid(true) : setIsValid(false);
                    }}
                    value={comment}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className={
                    comment ? "submitCommentActive" : "submitCommentInactive"
                  }
                  onClick={post}
                  disabled={!isValid || !is_signed}
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
