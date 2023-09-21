import React from "react";

const ReviewList = function (props) {
  return (
    <div className="row mt-5">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* 첫번째 슬라이더 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              {props.sliderItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="m-3 p-5 hover-item"
                  style={{
                    border: "1px solid black",
                    borderRadius: "20px",
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={item.first_image}
                    alt=""
                    style={{ width: "80%", height: "auto" }}
                  />
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 두번째 슬라이더 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              {props.sliderItems.slice(3, 6).map((item) => (
                <div
                  key={item.id}
                  className="m-3 p-5 hover-item"
                  style={{
                    border: "1px solid black",
                    borderRadius: "20px",
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={item.first_image}
                    alt=""
                    style={{ width: "80%", height: "auto" }}
                  />
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
