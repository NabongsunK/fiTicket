import React from "react";
import { Link } from "react-router-dom";
import GoToMap from "../../components/common/GoToMap";

const sliderItems = [
  { id: 1, imgSrc: "path/to/image1.jpg", description: "1번" },
  { id: 2, imgSrc: "path/to/image2.jpg", description: " 2번임" },
  { id: 3, imgSrc: "path/to/image3.jpg", description: "3333333ㅋㅋ 3" },
  { id: 4, imgSrc: "path/to/image4.jpg", description: "4ㅋ4ㅋ4ㅋ4ㅋ123 4" },
  { id: 5, imgSrc: "path/to/image5.jpg", description: "이55이이이5" },
  { id: 6, imgSrc: "path/to/image6.jpg", description: "이육육ㅁ닝 6" },
];

function Home() {
  return (
    <>
      <section id="section-1">
        <div className="content-slider">
          <input
            type="radio"
            id="banner1"
            className="sec-1-input"
            name="banner"
            defaultChecked
          />
          <input
            type="radio"
            id="banner2"
            className="sec-1-input"
            name="banner"
          />
          <input
            type="radio"
            id="banner3"
            className="sec-1-input"
            name="banner"
          />
          <input
            type="radio"
            id="banner4"
            className="sec-1-input"
            name="banner"
          />
          <div className="slider">
            <div id="top-banner-1" className="banner">
              <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                  <h2>시원하게 펼쳐진 포항의 바다를 한눈에 담아보자 !</h2>
                  <h1>포항 이가리닻</h1>
                  {/* 회원가입 페이지로 이동 */}
                  <div className="border-button">
                    <Link to="/">지금 가입하기</Link>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4>
                              <span>Population:</span>
                              <br />
                              44.48 M
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4>
                              <span>Territory:</span>
                              <br />
                              275.400 KM<em>2</em>
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4>
                              <span>AVG Price:</span>
                              <br />
                              $946.000
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <div className="main-button">
                              {/* 추천 행사로 이동 */}
                              <Link to="/deals">Explore More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="top-banner-2" className="banner">
              <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                  <h2>물 위를 걷는 느낌</h2>
                  <h1>속초 영랑호수윗길</h1>
                  <div className="border-button">
                    <Link to="about.html">Go There</Link>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4>
                              <span>Population:</span>
                              <br />
                              8.66 M
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4>
                              <span>Territory:</span>
                              <br />
                              41.290 KM<em>2</em>
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4>
                              <span>AVG Price:</span>
                              <br />
                              $1.100.200
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <div className="main-button">
                              <Link to="about.html">Explore More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="top-banner-3" className="banner">
              <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                  <h2>
                    계절에 따라 색을 입는 댑싸리의 향연에 여러분을 초대합니다
                  </h2>
                  <h1>연천 댑싸리공원</h1>
                  <div className="border-button">
                    <Link to="about.html">Go There</Link>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4>
                              <span>Population:</span>
                              <br />
                              67.41 M
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4>
                              <span>Territory:</span>
                              <br />
                              551.500 KM<em>2</em>
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4>
                              <span>AVG Price:</span>
                              <br />
                              $425.600
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <div className="main-button">
                              <Link to="about.html">Explore More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="top-banner-4" className="banner">
              <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                  <h2>자연을 느끼고 싶다면 태백으로 놀어오세요</h2>
                  <h1>태백 당골광장</h1>
                  <div className="border-button">
                    <Link to="about.html">Go There</Link>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4>
                              <span>Population:</span>
                              <br />
                              69.86 M
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4>
                              <span>Territory:</span>
                              <br />
                              513.120 KM<em>2</em>
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4>
                              <span>AVG Price:</span>
                              <br />
                              $165.450
                            </h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <div className="main-button">
                              <Link to="about.html">Explore More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="controls">
              <label htmlFor="banner1">
                <span className="progressbar">
                  <span className="progressbar-fill"></span>
                </span>
                <span className="text">1</span>
              </label>
              <label htmlFor="banner2">
                <span className="progressbar">
                  <span className="progressbar-fill"></span>
                </span>
                <span className="text">2</span>
              </label>
              <label htmlFor="banner3">
                <span className="progressbar">
                  <span className="progressbar-fill"></span>
                </span>
                <span className="text">3</span>
              </label>
              <label htmlFor="banner4">
                <span className="progressbar">
                  <span className="progressbar-fill"></span>
                </span>
                <span className="text">4</span>
              </label>
            </div>
          </nav>
        </div>
      </section>

      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-12">
            <img
              src="assets/images/recommand_temp.png"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

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
      <GoToMap />
    </>
  );
}

export default Home;
