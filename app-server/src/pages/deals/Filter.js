import { useRef, useState } from "react";
import Button from "../../components/common/Button";
const Filter = function (props) {
  const thisType = useRef(1);
  const toggleType = function (e) {
    props.setType(Number(e.target.dataset.value));
    thisType.current = Number(e.target.dataset.value);
  };
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
                  <Button
                    onClick={toggleType}
                    value={1}
                    isRev={1 == thisType.current}
                    style={{
                      padding: "10px auto",
                      fontSize: "14px",
                      border: "1px solid",
                      width: "8rem",
                      textAlign: "center",
                    }}
                    title="기간 임박"
                  />
                </div>
                <div className="col-lg-2 align-self-center">
                  <Button
                    onClick={toggleType}
                    value={2}
                    isRev={2 == thisType.current}
                    style={{
                      padding: "10px auto",
                      fontSize: "14px",
                      border: "1px solid",
                      width: "8rem",
                      textAlign: "center",
                    }}
                    title="먹거리"
                  />
                </div>
                <div className="col-lg-2 align-self-center">
                  <Button
                    onClick={toggleType}
                    value={3}
                    isRev={3 == thisType.current}
                    style={{
                      padding: "10px auto",
                      fontSize: "14px",
                      border: "1px solid",
                      width: "8rem",
                      textAlign: "center",
                    }}
                    title="체험"
                  />
                </div>
                <div className="col-lg-2 align-self-center">
                  <Button
                    onClick={toggleType}
                    value={4}
                    isRev={4 == thisType.current}
                    style={{
                      padding: "10px auto",
                      fontSize: "14px",
                      border: "1px solid",
                      width: "8rem",
                      textAlign: "center",
                    }}
                    title="공연"
                  />
                </div>
                <div className="col-lg-2 align-self-center">
                  <Button
                    onClick={toggleType}
                    value={5}
                    isRev={5 == thisType.current}
                    style={{
                      padding: "10px auto",
                      fontSize: "14px",
                      border: "1px solid",
                      width: "8rem",
                      textAlign: "center",
                    }}
                    title="전시"
                  />
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
