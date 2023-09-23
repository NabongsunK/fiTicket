import { Link } from "react-router-dom";
import GoToMap from "../../components/common/GoToMap";
import TeamsPageHeading from "./TeamsPageHeading";
import TeamsPageHeading2 from "./TeamsPageHeading copy";
import { useState } from "react";

const Teams = function () {
  const [isActive, setActive] = useState("false");
  const alertHandler = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
  };

  return (
    <>
      <TeamsPageHeading />
      <TeamsPageHeading2 />

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

      {/* 문의하기 */}
      <div
        className={
          isActive ? "toast toast-3s fade hide" : "toast toast-3s fade show"
        }
        role="alert"
        aria-live="assertive"
        data-delay="3000"
        aria-atomic="true"
        style={{ position: "absolute", right: "30%", zIndex: "100" }}
      >
        <div className="toast-header" style={{ backgroundColor: "#22b3c1" }}>
          <img
            src="assets/images/logo2.png"
            alt=""
            className="img-fluid m-r-5"
            style={{ width: "150px" }}
          />
          <strong className="mr-auto"></strong>
          <small className="text-muted"></small>
        </div>
        <div className="toast-body">
          <strong className="mr-auto">전송이 완료되었습니다.</strong>
        </div>
      </div>

      <div
        className="container"
        style={{ padding: "0 200px", marginTop: "50px" }}
      >
        <div className="card-body">
          <div className="bg-light p-4 mb-2">
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
                        <Link to="/teams" onClick={alertHandler}>
                          보내기
                        </Link>
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
        </div>
      </div>

      <GoToMap />
    </>
  );
};

export default Teams;
