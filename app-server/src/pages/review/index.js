import { Link } from "react-router-dom";

const review = function () {
  return (
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
              리뷰 작성
            </h4>
            <div className="col-3">
              <h4>
                <div className="border-button">
                  <Link to="/teams">등록하기</Link>
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
                  placeholder="회원ID"
                />
              </div>
              <div className="col-12 col-sm-6"></div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="리뷰 내용"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default review;
