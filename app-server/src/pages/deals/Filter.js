const Filter = function () {
  return (
    <div className="search-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form
              id="search-form"
              name="gs"
              method="submit"
              role="search"
              action="#"
            >
              <div className="row">
                <div className="col-lg-2">{/* <h4>Sort Deals By:</h4> */}</div>
                <div className="col-lg-4">
                  <fieldset>
                    <select
                      name="Location"
                      className="form-select"
                      aria-label="Default select example"
                      id="chooseLocation" /* onChange="this.form.click()" */
                    >
                      <option defaultValue>지역</option>
                      <option type="checkbox" name="option1" value="Italy">
                        Italy
                      </option>
                      <option value="1">서울</option>
                      <option value="2">경인</option>
                      <option value="3">강원</option>
                      <option value="4">충청</option>
                      <option value="5">전라</option>
                      <option value="6">경상</option>
                      <option value="7">제주</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-4">
                  <fieldset>
                    <select
                      name="Price"
                      className="form-select"
                      aria-label="Default select example"
                      id="choosePrice" /* onChange="this.form.click()" */
                    >
                      <option defaultValue>축제 분야</option>
                      <option value="100">먹거리</option>
                      <option value="250">공연</option>
                      <option value="500">전시</option>
                      <option value="1000">체험</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-2">
                  <fieldset>
                    <button className="border-button">찾기</button>
                  </fieldset>
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
