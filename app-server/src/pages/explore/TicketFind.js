import { useEffect, useRef } from "react";

const TicketFind = function (props) {
  var query = "";
  const valueRef = useRef("value");
  const search = function () {
    props.setKeyword(query);
    //TODO: 이쪽 리액트하게 수정

    // var va = document.getElementById("value");
    // va.value = "";

    valueRef.current = "";
  };

  const keyHandler = function (event) {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    // {/* 찾기 페이지 */}
    <div className="search-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              id="explore-search-form"
              name="gs"
              method="submit"
              role="search"
              action="#"
            >
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  {/* TODO: 여기서 onkeyup fillter() 정의해서 데이터 유효성 챙기기*/}
                  <input
                    className="form-control"
                    type="text"
                    id="value"
                    placeholder="축제 찾기"
                    onChange={(e) => (query = e.target.value)}
                    onKeyUp={keyHandler}
                  />
                </div>

                <div className="col-lg-2">
                  <button className="border-button" onClick={search}>
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketFind;
