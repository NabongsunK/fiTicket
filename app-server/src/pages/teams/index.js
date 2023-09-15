import { Link } from "react-router-dom";
import GoToMap from "../../components/common/GoToMap";

const Teams = function () {
  return (
    <>
      <div className="about-main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <div className="blur-bg"></div>
                <h4>전국 모든 지역행사를 응원합니다</h4>
                <div className="line-dec"></div>
                <h2>Loca!T와 전국 방방곡곡을 누비세요</h2>
                <p>
                  여러분 주위는 물론 전국 팔도 곳곳에 수많은 행사들이
                  진행중입니다. 주저하지 말고 지금 바로 참여하세요.
                </p>
                <div className="main-button">
                  <Link to="/login">Loca!T와 즐기기</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cities-town">
        <div className="container">
          <div className="row">
            <div className="slider-content">
              <div className="row">
                <div className="col-lg-12">
                  <h2>
                    Loca!T’s <em>Story &amp; Information</em>
                  </h2>
                </div>
                <div className="col-lg-12">
                  <div className="owl-cites-town owl-carousel">
                    <div className="item">
                      <div className="thumb">
                        <img src="/assets/images/cities-01.jpg" alt="" />
                        <h4>Havana</h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/assets/images/cities-02.jpg" alt="" />
                        <h4>Kingston</h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/assets/images/cities-03.jpg" alt="" />
                        <h4>George Town</h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/assets/images/cities-04.jpg" alt="" />
                        <h4>Santo Domingo</h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/assets/images/cities-01.jpg" alt="" />
                        <h4>Havana</h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/assets/images/cities-02.jpg" alt="" />
                        <h4>Kingston</h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/assets/images/cities-03.jpg" alt="" />
                        <h4>George Town</h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/assets/images/cities-04.jpg" alt="" />
                        <h4>Santo Domingo</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="weekly-offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>Loca!T와 함께 다양한 축제를 즐기세요</h2>
                <p>축제를 더욱 더 알차게 즐길 수 있도록 힘쓰겠습니다</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-weekly-offers owl-carousel">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-01.jpg" alt="" />
                    <div className="text">
                      <h4>
                        Havana
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip ~ Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <Link to="reservation.html">Make a Reservation</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-02.jpg" alt="" />
                    <div className="text">
                      <h4>
                        Kingston
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip ~ Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <Link to="reservation.html">Make a Reservation</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-03.jpg" alt="" />
                    <div className="text">
                      <h4>
                        George Town
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip ~ Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <Link to="reservation.html">Make a Reservation</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-01.jpg" alt="" />
                    <div className="text">
                      <h4>
                        Havana
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip ~ Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <Link to="reservation.html">Make a Reservation</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-02.jpg" alt="" />
                    <div className="text">
                      <h4>
                        Kingston
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip ~ Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <Link to="reservation.html">Make a Reservation</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-03.jpg" alt="" />
                    <div className="text">
                      <h4>
                        George Town
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip ~ Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <Link to="reservation.html">Make a Reservation</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-image">
                <img
                  src="assets/images/about-left-image.jpg"
                  alt=""
                  style={{ width: "500%" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>자주 물어보는 질문</h2>
                <p>Loca!T에 대해 궁금하신 내용들을 모아서 알려드립니다</p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="info-item row">
                    <div className="col-lg-10">
                      <h4>Loca!T는 무슨 의미인가요?</h4>
                    </div>
                    <div className="col-lg-2">
                      <img
                        src="assets/images/fold.png"
                        style={{ width: "70%", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="info-item row">
                    <div className="col-lg-10">
                      <h4>Loca!T 이용 방법을 알려주세요.</h4>
                    </div>
                    <div className="col-lg-2">
                      <img
                        src="assets/images/fold.png"
                        style={{ width: "70%", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="info-item row">
                    <div className="col-lg-10">
                      <h4>Loca!T는 왜 지역 축제 티켓을 파나요?</h4>
                    </div>
                    <div className="col-lg-2">
                      <img
                        src="assets/images/fold.png"
                        style={{ width: "70%", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="info-item row">
                    <div className="col-lg-10">
                      <h4>Loca!T는 뭐하는 사이트인가요?</h4>
                      <br />
                      <span>
                        우리 주변에 있지만 미처 알지 못했던 다양한 행사들을
                        소개하고 참여시 더욱 합리넉으로 할 수 있게 도와주는
                        Loca!T입니다.
                      </span>
                    </div>
                    <div className="col-lg-2">
                      <img
                        src="assets/images/fold.png"
                        style={{
                          width: "70%",
                          rotate: "180deg",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ padding: "0 200px", marginTop: "50px" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <h4
                className="mb-4 col-9"
                style={{ color: "#22b3c1", paddingLeft: "50px" }}
              >
                문의하기
              </h4>
              <div className="col-3">
                <h4>
                  <div className="border-button">
                    <Link to="/teams">보내기</Link>
                  </div>
                </h4>
              </div>
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
                    placeholder="연락처"
                  />
                </div>
                <div className="col-12 col-sm-6"></div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="문의 내용"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <GoToMap />
    </>
  );
};

export default Teams;
