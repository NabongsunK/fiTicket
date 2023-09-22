import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useSearchParams } from "react-router-dom";
=======
>>>>>>> 8e2cf30d1f48a05c21f299e72fc76ff8b3d06756
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import localList from "../../data/locallist.json";
import festivalsData from "../../data/_festivals.json";


const Recommend = function () {
  const [selectedLocal, setSelectedLocal] = useState(0); // 선택한 지역의 ID를 저장하는 상태
  const [festivals, setFestivals] = useState(festivalsData); // 선택한 지역의 행사 정보를 저장하는 상태

  useEffect(() => {
    // 선택한 지역의 ID가 변경될 때마다 해당 지역의 행사 정보
    const selectedLocalFestivals = festivalsData.filter(
      (festival) => festival.areacode === selectedLocal
    );
    setFestivals(selectedLocalFestivals);
  }, [selectedLocal]);

  const onChangeToggle = (selectedValue) => {
    setSelectedLocal(selectedValue);
  };

  const LocalSelectList = localList.map((localItem) => (
    <ToggleButton
      id={"tbg-radio" + localItem.id}
      value={localItem.area_code}
      key={localItem.id}
    >
      {localItem.localTitle}
    </ToggleButton>
  ));


  const festivalList = festivals.map((festival) => (
    <div key={festival.id}>
      <img src={festival.firstimage} />
      <h6>{festival.title}</h6>
      {/* 이 밑에 원하는 행사 정보 표시 내용 추가 */}
    </div>
  ));


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
            <ToggleButtonGroup
              type="radio"
              name="options"
              defaultValue={0}
              onChange={onChangeToggle}
            >
              {LocalSelectList}
            </ToggleButtonGroup>

            {/* 행사 리스트 */}
            <div className="col-md-3 card-body">{festivalList}</div>

            {/* pagination */}
            <div className="col-lg-12">
              <ul className="page-numbers">
                <li>
                  <Link
                    to=""
                    onClick={() => {
                      if (page > 1) {
                        dispatch(prev({ step: 1 }));
                      }
                    }}
                  >
                    <i className="fa fa-arrow-left"></i>
                  </Link>
                </li>

                {totalPage.map((page) => (
                  <li key={page} className={page === currPage ? "active" : ""}>
                    <Link to="#">{page}</Link>
                  </li>
                ))}

                <li>
                  <Link
                    to=""
                    onClick={() => {
                      if (page < lastPage) {
                        dispatch(next({ step: 1 }));
                      }
                    }}
                  >
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
