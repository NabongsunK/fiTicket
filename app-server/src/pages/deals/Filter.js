const Filter = function (props) {
  const toggleType = function (e) {
    props.setType(Number(e.target.value));
  };
  // console.log(toggleType());
  // const type = function () {
  //   props.setType(toggleType);
  // };
  return (
    <div className="search-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <form
              id="search-form"
              name="gs"
              method="submit"
              role="search"
              action="#"
            >
              <div className="row justify-content-center">
                <div className="col-lg-2 align-self-center">
                  <button
                    value={1}
                    type="button"
                    onClick={toggleType}
                    style={{ padding: "8px 11px" }}
                    autoFocus
                  >
                    기간 임박
                  </button>
                </div>
                <div className="col-lg-2 align-self-center">
                  <button
                    value={2}
                    type="button"
                    onClick={toggleType}
                    style={{ padding: "8px 11px" }}
                  >
                    먹거리
                  </button>
                </div>
                <div className="col-lg-2 align-self-center">
                  <button value={3} onClick={toggleType} type="button">
                    체험
                  </button>
                </div>
                <div className="col-lg-2 align-self-center">
                  <button value={4} onClick={toggleType} type="button">
                    공연
                  </button>
                </div>
                <div className="col-lg-2 align-self-center">
                  <button value={5} onClick={toggleType} type="button">
                    전시
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
