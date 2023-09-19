import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const onChangeToggle = function () {
};

const LocalSelect = ({ localInfos, onChangeToggle }) => {
  const LocalSelectList = localInfos.map((localInfo) => (
    <ToggleButton
      id={"tbg-radio" + localInfo.id}
      value={localInfo.id}
      key={localInfo.id}
    >
      {localInfo.localTitle}
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
                backgroundColor: "#22b3c1"
              }}
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-5 align-middle">
                  <h2 style={{ margin: "0", color: "#fff" }}>
                    <em style={{color: "#fff"}}>지역별 행사 추천</em>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Recommend;
