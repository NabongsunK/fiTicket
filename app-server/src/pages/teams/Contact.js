import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = function () {
  const [isActive, setActive] = useState("false");
  const alertHandler = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
  };

  return (
    <>
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

                <form id="Inquiry">
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
    </>
  );
};

export default Contact;
