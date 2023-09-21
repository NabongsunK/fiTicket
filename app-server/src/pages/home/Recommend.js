import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import localList from "../../data/locallist.json";
import festivalsData from "../../data/_festivals.json";
import { useDispatch, useSelector } from "react-redux";
import { move } from "../../store/pageSlice";
import { Link } from "react-router-dom";

const Recommend = function (props) {
  const [selectedAreaCode, setSelectedAreaCode] = useState(-1);
  const [festivalData, setFestivalData] = useState(null); // 선택된 지역의 축제 데이터

  const fetchFestivalDataByAreaCode = (areaCode) => {
    // festivalsData에서 areaCode에 맞는 데이터를 찾습니다.
    const selectedData = festivalsData.filter((festival) => {
      console.log(festival.areacode, areaCode);
      return festival.areacode === areaCode;
    });
    // console.log(selectedData);
    if (selectedData) {
      // 선택된 데이터에서 필요한 정보를 추출합니다.
      const { area_code, firstimage, title } = selectedData;

      // 추출한 정보를 상태에 저장합니다.
      setSelectedAreaCode(area_code);
      setFestivalData({ firstimage, title });
    } else {
      // 해당 areaCode에 맞는 데이터가 없을 경우 처리할 내용을 여기에 추가할 수 있습니다.
      //console.log(areaCode);
    }
  };

  const onChangeToggle = (val) => {
    // console.log(val); // 클릭한 토글의 area_code를 콘솔에 출력
    localList.forEach((area) => {
      console.log(area.id, val, area.id === val);
      if (area.id == val) {
        setSelectedAreaCode(area.area_code); // 선택된 지역의 area_code를 상태에 저장
        console.log(selectedAreaCode);
        return false;
      }
    });
    console.log(selectedAreaCode);
    // fetchFestivalDataByAreaCode(selectedAreaCode); // 선택된 지역에 해당하는 데이터를 가져와서 상태에 저장
  };

  // 검색어
  const [keyword, setKeyword] = useState("");
  // 지역별 리스트
  const [regionResult, setRegionResult] = useState(props.festivals);
  // 페이지별 리스트
  const [pageResult, setPageResult] = useState([]);
  const dispatch = useDispatch();

  // 새로 지역리스트 들어오면
  useEffect(() => {
    // 지역리스트 갱신
    setRegionResult(props.festivals);
  }, [props]);

  // 키워드 바뀌면
  useEffect(() => {
    //페이징 초기화
    dispatch(move({ point: 1 }));
    //정규식으로 regionResult 분리
    const regExp = new RegExp(keyword, "i");
    setRegionResult(
      props.festivals.filter((festivals) => regExp.test(festivals.title))
    );
  }, [keyword]);

  //슬라이스에서 현재 페이지 가지고옴
  var page = useSelector((state) => state.viewPageSlice.page);

  // 한페이지당 출력되야되는 리스트
  const listPerPage = 4;
  // 해당페이지 첫 요소
  var skip = (page - 1) * listPerPage;

  //검색에의해서 바뀌거나 page가 바뀌면
  useEffect(() => {
    skip = (page - 1) * listPerPage;
    setPageResult(regionResult.slice(skip, skip + listPerPage));
  }, [regionResult, page]);

  // 마지막페이지 계산
  const lastPage = Math.floor(
    (listPerPage + regionResult.length - 1) / listPerPage
  );

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

            {/* 여기리스트 들어갈 부분 */}

            {festivalData && (
              <div className="col-lg-6">
                <div className="image">
                  <img src={festivalData.firstimage} alt="" />
                </div>
                <h5>{festivalData.title}</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
