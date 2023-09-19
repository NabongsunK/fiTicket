const sliderItems = [
  { id: 1, imgSrc: "path/to/image1.jpg", description: "1번" },
  { id: 2, imgSrc: "path/to/image2.jpg", description: " 2번임" },
  { id: 3, imgSrc: "path/to/image3.jpg", description: "3333333ㅋㅋ 3" },
  { id: 4, imgSrc: "path/to/image4.jpg", description: "4ㅋ4ㅋ4ㅋ4ㅋ123 4" },
  { id: 5, imgSrc: "path/to/image5.jpg", description: "이55이이이5" },
  { id: 6, imgSrc: "path/to/image6.jpg", description: "이육육ㅁ닝 6" },
];

function Review() {
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <div className="row">
        <div className="cities-town">
          <div className="container">
            <div
              className="slider-content"
              style={{
                padding: "10px",
                width: "50%",
                left: "25%",
                backgroundColor: "#22b3c1",
              }}
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-5 align-middle">
                  <h2 style={{ margin: "0", color: "#fff" }}>
                    <em style={{ color: "#fff" }}>베스트 리뷰</em>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 슬라이더 시작  */}
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
                  {sliderItems.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="m-3 p-5"
                      style={{
                        border: "1px solid black",
                        borderRadius: "20px",
                        width: "200px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.description}
                        style={{ width: "80%", height: "auto" }}
                      />
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 두번째 슬라이더 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  {sliderItems.slice(3, 6).map((item) => (
                    <div
                      key={item.id}
                      className="m-3 p-5"
                      style={{
                        border: "1px solid black",
                        borderRadius: "20px",
                        width: "200px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.description}
                        style={{ width: "80%", height: "auto" }}
                      />
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 슬라이더 컨트롤*/}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* 슬라이더 끝 */}
      </div>
    </div>
  );
}

export default Review;
