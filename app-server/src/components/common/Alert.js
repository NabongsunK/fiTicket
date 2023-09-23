import { useState } from "react";

function Alert() {
  const [isActive, setActive] = useState("false");
  const alertHandler = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
  };

  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-header">
          <h5>Data-delay</h5>
        </div>
        {/* 배경 사용 선택 */}
        <div className="card-body">
          <div className="bg-light p-4 mb-2" style={{ height: "250px" }}>
            {/* 알람창 놓고싶은데 넣기*/}
            <div
              className={
                isActive
                  ? "toast toast-3s fade hide"
                  : "toast toast-3s fade show"
              }
              role="alert"
              aria-live="assertive"
              data-delay="3000"
              aria-atomic="true"
            >
              <div
                className="toast-header"
                style={{ backgroundColor: "#22b3c1" }}
              >
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
                <strong className="mr-auto">
                  티켓이 장바구니에 담겼습니다.
                </strong>
              </div>
            </div>
          </div>

          <button className="btn  btn-primary" onClick={alertHandler}>
            3 sec
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
