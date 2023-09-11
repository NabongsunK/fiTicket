import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      
      <section id="section-1">
        <div className="content-slider">
          <input type="radio" id="banner1" className="sec-1-input" name="banner" defaultChecked />
          <input type="radio" id="banner2" className="sec-1-input" name="banner" />
          <input type="radio" id="banner3" className="sec-1-input" name="banner" />
          <input type="radio" id="banner4" className="sec-1-input" name="banner" />
          <div className="slider">
            <div id="top-banner-1" className="banner">
              <div className="banner-inner-wrapper header-text">
                <div className="main-caption">
                  <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                  <h1>Caribbean</h1>
                  {/* 회원가입 페이지로 이동 */}
                  <div className="border-button"><Link to="/">지금 가입하기</Link></div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4><span>Population:</span><br />44.48 M</h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4><span>Territory:</span><br />275.400 KM<em>2</em></h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4><span>AVG Price:</span><br />$946.000</h4>
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
                  <h1>Switzerland</h1>
                  <div className="border-button"><Link to="about.html">Go There</Link></div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4><span>Population:</span><br />8.66 M</h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4><span>Territory:</span><br />41.290 KM<em>2</em></h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4><span>AVG Price:</span><br />$1.100.200</h4>
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
                  <h1>France</h1>
                  <div className="border-button"><Link to="about.html">Go There</Link></div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4><span>Population:</span><br />67.41 M</h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4><span>Territory:</span><br />551.500 KM<em>2</em></h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4><span>AVG Price:</span><br />$425.600</h4>
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
                  <h1>Thailand</h1>
                  <div className="border-button"><Link to="about.html">Go There</Link></div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-user"></i>
                            <h4><span>Population:</span><br />69.86 M</h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-globe"></i>
                            <h4><span>Territory:</span><br />513.120 KM<em>2</em></h4>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-6">
                            <i className="fa fa-home"></i>
                            <h4><span>AVG Price:</span><br />$165.450</h4>
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
              <label htmlFor="banner1"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">1</span></label>
              <label htmlFor="banner2"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">2</span></label>
              <label htmlFor="banner3"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">3</span></label>
              <label htmlFor="banner4"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">4</span></label>
            </div>
          </nav>
        </div>
      </section>

      
      <div className="visit-country">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <h2>Visit One Of Our Countries Now</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="items">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-4 col-sm-5">
                          <div className="image">
                            <img src="assets/images/country-01.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-sm-7">
                          <div className="right-content">
                            <h4>SWITZERLAND</h4>
                            <span>Europe</span>
                            <div className="main-button">
                              <Link to="about.html">Explore More</Link>
                            </div>
                            <p>Woox Travel is a professional Bootstrap 5 theme HTML CSS layout for your website. You can use this layout for your commercial work.</p>
                            <ul className="info">
                              <li><i className="fa fa-user"></i> 8.66 Mil People</li>
                              <li><i className="fa fa-globe"></i> 41.290 km2</li>
                              <li><i className="fa fa-home"></i> $1.100.200</li>
                            </ul>
                            <div className="text-button">
                              <Link to="about.html">Need Directions ? <i className="fa fa-arrow-right"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-4 col-sm-5">
                          <div className="image">
                            <img src="assets/images/country-02.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-sm-7">
                          <div className="right-content">
                            <h4>CARIBBEAN</h4>
                            <span>North America</span>
                            <div className="main-button">
                              <Link to="about.html">Explore More</Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            <ul className="info">
                              <li><i className="fa fa-user"></i> 44.48 Mil People</li>
                              <li><i className="fa fa-globe"></i> 275.400 km2</li>
                              <li><i className="fa fa-home"></i> $946.000</li>
                            </ul>
                            <div className="text-button">
                              <Link to="about.html">Need Directions ? <i className="fa fa-arrow-right"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="item last-item">
                      <div className="row">
                        <div className="col-lg-4 col-sm-5">
                          <div className="image">
                            <img src="assets/images/country-03.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-sm-7">
                          <div className="right-content">
                            <h4>FRANCE</h4>
                            <span>Europe</span>
                            <div className="main-button">
                              <Link to="about.html">Explore More</Link>
                            </div>
                            <p>We hope this WoOx template is useful for you, please support us a <Link to="https://paypal.me/templatemo" target="_blank">small amount of PayPal</Link> to info [at] templatemo.com for our survival. We really appreciate your contribution.</p>
                            <ul className="info">
                              <li><i className="fa fa-user"></i> 67.41 Mil People</li>
                              <li><i className="fa fa-globe"></i> 551.500 km2</li>
                              <li><i className="fa fa-home"></i> $425.600</li>
                            </ul>
                            <div className="text-button">
                              <Link to="about.html">Need Directions ? <i className="fa fa-arrow-right"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="page-numbers">
                      <li><Link to="#"><i className="fa fa-arrow-left"></i></Link></li>
                      <li><Link to="#">1</Link></li>
                      <li className="active"><Link to="#">2</Link></li>
                      <li><Link to="#">3</Link></li>
                      <li><Link to="#"><i className="fa fa-arrow-right"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-bar-map">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="550px" frameBorder="0" style={{border:0, borderRadius: 0}} allowFullScreen=""></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Are You Looking To Travel ?</h2>
              <h4>Make A Reservation By Clicking The Button</h4>
            </div>
            <div className="col-lg-4">
              <div className="border-button">
                <Link to="/books">Book Yours Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;