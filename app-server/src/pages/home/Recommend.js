import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import localList from "../../data/locallist.json";

const onChangeToggle = function () {};

const LocalSelect = ({ onChangeToggle }) => {
  const LocalSelectList = localList.map((localList) => (
    <ToggleButton
      id={"tbg-radio" + localList.id}
      value={localList.id}
      key={localList.id}
    >
      {localList.localTitle}
    </ToggleButton>
  ));

  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      defaultValue={0}
      onChange={onChangeToggle}
    >
      {LocalSelectList}
    </ToggleButtonGroup>
  );
};

const Recommend = function () {
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div
              className="slider-content"
              style={{
                padding: "10px",
                width: "100%",
                textAlign: "center",
                borderRadius: "7px",
                backgroundColor: "#22b3c1",
              }}
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-5 align-middle">
                  <h2 style={{ margin: "0", color: "#fff" }}>
                    <em style={{ color: "#fff" }}>지역별 행사 추천</em>
                  </h2>
                </div>
              </div>
            </div>

            {/* 토글버튼 */}
            <LocalSelect />

            {/* 여기리스트 들어갈 부분 */}
            <div className="col-lg-3">
              <div className="image">
                <img
                  className="poster"
                  src={props.festival.first_image}
                  alt=""
                />
              </div>
              <h5>{props.festival.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
