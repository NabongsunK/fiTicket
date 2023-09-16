import { Link } from "react-router-dom";
import GoToMap from "../../components/common/GoToMap";

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
                  <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
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
                  <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
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
                  <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
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
                  <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
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

      <div className="container" style={{marginTop:"150px"}}>
        <div className="row">
          <div className="col-12">
            <img src="assets/images/recommand_temp.png" style={{width:"100%"}} />
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop:"150px"}}>

        <div className="row">

        <div className="cities-town">
          <div className="container">
            <div className="slider-content" style={{padding:"10px", width:"50%", left:"25%", backgroundColor:"#22b3c1"}}>
              <div className="row justify-content-center align-items-center">
                <div className="col-5 align-middle">
                  <h2 style={{margin:"0", color:"#fff"}}>
                    <em style={{color:"#fff"}}>베스트 리뷰</em>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

          
    
          <div className="row align-items-center">
            <div className="col-1">
              <div className="border-button">
                <Link to="/"><i className="fa fa-angle-left fs-2"></i></Link>
              </div>
            </div>
            <div className="col-10">
              <img src="assets/images/review_temp.png" style={{width:"120%"}} />
            </div>
            <div className="col-1">
              <div className="border-button">
                <Link to="/"><i className="fa fa-angle-right fa-2"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>



      <GoToMap />

    </>
  );
}

export default Home;
